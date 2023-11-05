import { NavigationProp, useNavigation } from '@react-navigation/native';
import { UserCircle } from '@tamagui/lucide-icons';
import React, { useMemo } from 'react';
import {
  Image,
  YStack,
  Text,
  Stack,
  XStack,
  H4,
} from 'tamagui';
import { SPACING, WIN } from '../constants';
import { ArticlesStackParamList } from '../navigations/models/articles';
import { RouteName } from '../navigations/models/common';

import { Article } from '../redux/models/articles';

interface PostProps {
  article: Article;
}

const Post: React.FC<PostProps> = (props) => {
  const navigation = useNavigation<NavigationProp<ArticlesStackParamList>>();

  const date = useMemo(() => (
    new Date(props.article.publishedAt).toLocaleDateString()
  ), [props.article.publishedAt]);

  const onPostPress = () => {
    navigation.navigate(RouteName.POSTDETAIL, { article: props.article });
  };

  return (
    <YStack
      backgroundColor="#fff"
      elevation={1}
      borderRadius={20}
      mb={SPACING}
      onPress={onPostPress}
    >
      <Stack
        padding={SPACING}
        paddingBottom={props.article.urlToImage ? SPACING / 2 : SPACING}
      >
        <XStack justifyContent="space-between">
          <XStack alignItems="center" gap={SPACING / 2} mb={SPACING / 2}>
            <UserCircle size="$1" />
            <Text numberOfLines={1} ellipse>{props.article.author}</Text>
          </XStack>
          <Text>{date}</Text>
        </XStack>
        <H4 numberOfLines={props.article.urlToImage ? 2 : undefined}>{props.article.title}</H4>
      </Stack>
      {(props.article.urlToImage && (
        <Image
          source={{ uri: props.article.urlToImage }}
          width="100%"
          height={(WIN.width - (SPACING * 4)) * 0.6}
          backgroundColor="$blue2"
          resizeMode="cover"
        />
      ))}
      {(props.article.description && (
        <Stack padding={SPACING}>
          <Text>{props.article.description}</Text>
        </Stack>
      ))}
    </YStack>
  );
};

export default Post;
