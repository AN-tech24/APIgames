# ①課題番号-プロダクト名

6-『目指せ！お城マスター』

## ②課題内容（どんな作品か）
-都道府県、建築年代→(築城か…)
そして、「ヒント」の画像から、どのお城かを当てて、スコア50のお城マスターを目指すゲームです。
-小学生のこもできる！をイメージして作りました
↑すみません、②が書き換わってなかったです

## ③DEMO

[https://gsdeploy.sakura.ne.jp/APIgames/main2.html]

## ④作ったアプリケーション用のIDまたはPasswordがある場合

- ID: 〇〇〇〇〇〇〇〇
- PW: 〇〇〇〇〇〇〇〇

## ⑤工夫した点・こだわった点

-WikipediaAPIから取得してくるヒントについて工夫した
・当初はただ情報を持ってくるだけだったので、ヒントの羅列で可読性が低かった。
　持ってくる情報の量（文章の量）に合わせて、ヒントを表示させる欄を調整することを考えた。
・設計中、ヒントで持ってくる情報に答えが出てしまうことが多々あった。
解決策として、以下2つを考えた。
①ヒントのテキストからお城の名前を削除するコードの記載 ②ヒントとして画像のみを表示させる
→②を採用。見栄えもよくなった

-・前々回の講義時に、チューターさんからユーザーが楽しんで操作を行うためのコツ(得点の表示などハントの要素や偶発性を加えること)を学んだ。
そこで、ユーザーの成績とフィードバックの要素を追加した。
-・正解した後のページに、該当Wikiへのリンクを貼り、正解後に参照できるようにした。

## ⑥難しかった点・次回トライしたいこと(又は機能)。

-次回トライしたいこと
・お城の情報だけでなく、問題文としてWikipediaからどのお城を持ってくるかもWikipediaAPIからもっと持ってきたかったが、
「城」の検索に、
「全国城郭存廃ノ処分並兵営地等撰定方」（ぜんこくじょうかくそんぱいのしょぶんならびにへいえいちとうせんていかた）の法令のように「城」と書いてあるものをたくさんひっぱってきてしまっていた。
Wiki内で「城」タグのようなものがあるのだろうか、仕様を確認したい。


## ⑦質問・疑問・感想、シェアしたいこと等なんでも

- [質問]
-次回トライしたことと同様になりますが、Wikipedia内で特定のタグ付けなどできるのでしょうか。
日本の城だけをWikipediaからとってくる、等

- [感想]
- ・ チューターさんから学んだことであったり、G's Academyに通い開発を続けてきたからこそすぐに頭に浮かぶようになってきたこと(「次の問題に移動」が欲しいな、回答するまでは「次の問題に移動」はいらないな、など)であったりが、
増えてきて、少しずつだけれども確かに地力、自力がついてきたようにふと感じました。もっと皆さんのコードやお話から学んでいきたいです！
- ・ジオゲッサー風アプリでお城当てクイズ考えており、GoogleMAP　APIの利用も検討したが、自分でいくつものお城の情報を登録する必要があったため、
ほかの方法を考え、WikipediaAPIからのクイズ選定、そして画像を持ってくることを考え付いた。
作りたいものに利用できるAPIがあれば非常に便利だと感じた。(お城APIやドラクエAPIないかしら、、、)



- [参考記事]
  - 1. [URLをここに記入]
  - 2. [URLをここに記入]


