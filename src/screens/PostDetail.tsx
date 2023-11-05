import { NativeStackScreenProps } from '@react-navigation/native-stack';
import WebView from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { YStack } from 'tamagui';

import { ArticlesStackParamList } from '../navigations/models/articles';
import { RouteName } from '../navigations/models/common';

type PostDetailProps = NativeStackScreenProps<ArticlesStackParamList, RouteName.POSTDETAIL>;

const PostDetail: React.FC<PostDetailProps> = (props) => (
  <YStack flex={1}>
    <WebView
      source={{ uri: props.route.params?.article.url }}
      style={styles.webView}
    />
  </YStack>
);

const styles = StyleSheet.create({
  webView: {
    width: '100%',
    height: '100%',
  },
});

export default PostDetail;
