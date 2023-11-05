import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ArrowUp, Cable } from '@tamagui/lucide-icons';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from 'react-native';
import {
  AnimatePresence,
  H2,
  Spacer,
  Spinner,
  Stack,
  Text,
} from 'tamagui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { SPACING } from '../constants';
import { Article } from '../redux/models/articles';
import Post from './Post';
import CustomButtonRound from './CustomButtonRound';
import articlesApi, {
  useLazyGetAllArticlesBySearchQuery,
  useLazyGetTopHeadlinesArticlesQuery,
} from '../redux/services/articles';

interface PostManagerProps {
  search?: string;
}

const defaultProps = {
  search: '',
};

const PostManager: React.FC<PostManagerProps> = (props) => {
  const [page, setPage] = useState(1);
  const [scrollStarted, setScrollStarted] = useState(false);

  const flatList = useRef<FlatList<Article>>(null);
  const scrollingToTop = useRef(false);

  const dispatch = useDispatch();

  const [
    getNextAllArticlesBySearchQuery,
    allArticlesResult,
  ] = useLazyGetAllArticlesBySearchQuery();
  const [
    getNextTopHeadlinesArticlesQuery,
    topHeadlinesResult,
  ] = useLazyGetTopHeadlinesArticlesQuery();

  const data = useMemo(() => (
    props.search !== '' ? allArticlesResult.data : topHeadlinesResult.data
  ), [props.search !== '', allArticlesResult.data, topHeadlinesResult.data]);
  const isError = useMemo(() => (
    props.search !== '' ? allArticlesResult.isError : topHeadlinesResult.isError
  ), [props.search !== '', allArticlesResult.isError, topHeadlinesResult.isError]);
  const isEndReached = useMemo(() => data && data.totalResults <= data.articles.length, [data]);

  const safeAreaInsets = useSafeAreaInsets();

  useEffect(() => {
    dispatch(articlesApi.util.resetApiState());
    if (page !== 1) {
      setPage(1);
    } else if (props.search !== '') {
      console.log('START LOADING SEARCH');
      getNextAllArticlesBySearchQuery({ page: 1, search: props.search })
        .catch(console.warn);
    } else {
      getNextTopHeadlinesArticlesQuery({ page: 1 })
        .catch(console.warn);
    }
  }, [props.search]);

  useEffect(() => {
    if (props.search !== '') {
      getNextAllArticlesBySearchQuery({ page, search: props.search })
        .catch(console.warn);
    } else {
      getNextTopHeadlinesArticlesQuery({ page })
        .catch(console.warn);
    }
  }, [page]);

  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!scrollStarted
    && event.nativeEvent.contentOffset.y > 0
    && scrollingToTop.current === false) {
      setScrollStarted(true);
    } else if (scrollStarted && event.nativeEvent.contentOffset.y <= 0) {
      scrollingToTop.current = false;
      setScrollStarted(false);
    }
  }, [scrollStarted]);

  const handleScrollBegin = useCallback(() => {
    scrollingToTop.current = false;
  }, []);

  const onScrollToTopPress = () => {
    flatList.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setScrollStarted(false);
    scrollingToTop.current = true;
  };

  const loadNextPage = () => {
    setPage(page + 1);
  };

  if (!data && !isError) {
    return (
      <Stack flex={1} justifyContent="center" alignContent="center">
        <Spinner />
      </Stack>
    );
  }
  if (isError) {
    console.warn(isError);
    return (
      <Stack
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <Cable color="#000" size="$4" />
        <H2 mt={SPACING * 2} textAlign="center">
          Something went wrong:
        </H2>
      </Stack>
    );
  }
  return (
    <Stack
      flex={1}
      justifyContent="center"
      alignContent="center"
      backgroundColor="$blue1"
    >
      <FlatList
        ref={flatList}
        data={data.articles}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <Post article={item} />
        )}
        contentContainerStyle={styles.flatList}
        ListHeaderComponent={<Spacer size={SPACING} />}
        ListFooterComponent={isEndReached && (
          <Stack
            padding={SPACING}
            paddingBottom={safeAreaInsets.bottom}
            alignItems="center"
          >
            <Text>You reached the end!</Text>
          </Stack>
        )}
        onScroll={handleScroll}
        onScrollBeginDrag={handleScrollBegin}
        contentInsetAdjustmentBehavior="automatic"
        onEndReachedThreshold={0.2}
        onEndReached={loadNextPage}
      />
      <AnimatePresence>
        {(scrollStarted && (
          <CustomButtonRound
            bottom={safeAreaInsets.bottom + SPACING}
            right={SPACING}
            icon={<ArrowUp color="#000" size="$3" />}
            onPress={onScrollToTopPress}
          />
        ))}
      </AnimatePresence>
    </Stack>
  );
};

PostManager.defaultProps = defaultProps;

const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: SPACING,
    flexGrow: 1,
  },
});

export default PostManager;
