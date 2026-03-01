export const lessons = [
  {
    title: "ようこそ",
    description: `
<h2>Elixir Tour へようこそ</h2>
<p>このチュートリアルでは、Elixir プログラミング言語の基本から応用まで学びます。</p>
<p>右側のエディタにコードが表示されています。<strong>Run</strong> ボタンを押すと、ブラウザ上で直接 Elixir コードが実行されます。</p>
<p>コードを自由に編集して、いろいろ試してみましょう！</p>
<h3>IO.puts / IO.inspect</h3>
<p><code>IO.puts/1</code> は文字列を標準出力に表示します。<code>IO.inspect/2</code> は任意の値をデバッグ表示します。</p>
<p><strong>← / →</strong> ボタンかドロップダウンでページを移動できます。<br><strong>Ctrl+Enter</strong> でコードを実行できます。</p>
`,
    defaultCode: `# Hello World!
IO.puts("Hello, Elixir!")

# 文字列補間
name = "World"
IO.puts("Hello, \#{name}!")

# 計算結果の表示
IO.puts("1 + 2 = \#{1 + 2}")

# IO.inspect で任意の値を表示
IO.inspect([1, 2, 3], label: "リスト")
IO.inspect(%{a: 1, b: 2}, label: "マップ")

# 最後の式の値が => の後に表示されます
"Welcome to Elixir Tour!"`,
  },
  {
    title: "基本型",
    description: `
<h2>基本型</h2>
<p>Elixir には以下の基本的なデータ型があります：</p>
<ul>
  <li><strong>整数</strong> - <code>42</code>, <code>0xFF</code>, <code>0b1010</code>, <code>1_000_000</code></li>
  <li><strong>浮動小数点数</strong> - <code>3.14</code>, <code>1.0e-10</code></li>
  <li><strong>文字列</strong> - <code>"hello"</code>（UTF-8 エンコード）</li>
  <li><strong>アトム</strong> - <code>:hello</code>, <code>:ok</code>, <code>:error</code></li>
  <li><strong>ブーリアン</strong> - <code>true</code>, <code>false</code>（実は <code>:true</code>, <code>:false</code> アトム）</li>
  <li><strong>nil</strong> - <code>nil</code>（実は <code>:nil</code> アトム）</li>
</ul>
<p><code>is_integer/1</code>, <code>is_float/1</code>, <code>is_atom/1</code> などで型を確認できます。</p>
<p>整数は任意精度（ビッグナム）対応です。</p>
`,
    defaultCode: `# 整数（様々な表記）
IO.puts(42)           # 10進数
IO.puts(0xFF)         # 16進数 = 255
IO.puts(0b1010)       # 2進数 = 10
IO.puts(1_000_000)    # アンダースコアで区切り可能

# 浮動小数点数
IO.puts(3.14)
IO.puts(1.0e-10)

# 文字列
IO.puts("こんにちは、世界！")

# アトム
IO.inspect(:hello)
IO.inspect(:ok)

# ブーリアン（アトムの一種）
IO.puts(true == :true)

# nil
IO.puts(nil == :nil)

# 型チェック
IO.puts("42 is integer? \#{is_integer(42)}")
IO.puts("3.14 is float? \#{is_float(3.14)}")
IO.puts(":hello is atom? \#{is_atom(:hello)}")

# 任意精度整数
IO.inspect(2 ** 64)`,
  },
  {
    title: "演算子",
    description: `
<h2>演算子</h2>
<h3>算術演算子</h3>
<p><code>+</code> <code>-</code> <code>*</code> <code>/</code>（常に float を返す）、<code>div/2</code>（整数除算）、<code>rem/2</code>（剰余）</p>
<h3>比較演算子</h3>
<p><code>==</code> <code>!=</code> <code>===</code>（型も厳密）<code>&lt;</code> <code>&gt;</code> <code>&lt;=</code> <code>&gt;=</code></p>
<p>型の比較順序: <code>number &lt; atom &lt; reference &lt; function &lt; port &lt; pid &lt; tuple &lt; list &lt; bitstring</code></p>
<h3>論理演算子</h3>
<p><code>and</code> <code>or</code> <code>not</code>（ブーリアン専用）<br>
<code>&amp;&amp;</code> <code>||</code> <code>!</code>（任意の値で使用可能）</p>
<h3>文字列・リスト演算子</h3>
<p><code>&lt;&gt;</code> 文字列連結、<code>++</code> リスト連結、<code>--</code> リスト差分</p>
`,
    defaultCode: `# 算術演算子
IO.puts(10 + 3)      # 13
IO.puts(10 - 3)      # 7
IO.puts(10 * 3)      # 30
IO.puts(10 / 3)      # 3.333... (常にfloat)
IO.puts(div(10, 3))  # 3 (整数除算)
IO.puts(rem(10, 3))  # 1 (剰余)
IO.puts(abs(-42))    # 42

# 比較演算子
IO.puts(1 == 1.0)    # true  (値比較)
IO.puts(1 === 1.0)   # false (型も厳密)
IO.puts(1 != 2)      # true

# 異なる型の比較（型の順序に従う）
IO.puts(1 < :atom)   # true (number < atom)

# 論理演算子 (boolean専用)
IO.puts(true and false)
IO.puts(true or false)
IO.puts(not true)

# && || ! (truthy/falsy値で使用可能)
IO.puts(nil || "デフォルト値")   # "デフォルト値"
IO.puts("値" && "別の値")        # "別の値"
IO.puts(!nil)                    # true
IO.puts(!false)                  # true
IO.puts(!0)                      # false (0はtruthyに注意！)

# 文字列・リスト演算子
IO.puts("Hello" <> " " <> "World")
IO.inspect([1, 2] ++ [3, 4])
IO.inspect([1, 2, 3, 2, 1] -- [2])`,
  },
  {
    title: "コレクション",
    description: `
<h2>コレクション</h2>
<p>Elixir の主要なコレクション型：</p>
<ul>
  <li><strong>リスト</strong> - <code>[1, 2, 3]</code> — 連結リスト（先頭追加が O(1)）</li>
  <li><strong>タプル</strong> - <code>{:ok, "hello"}</code> — 固定長、メモリ連続（インデックスアクセスが O(1)）</li>
  <li><strong>マップ</strong> - <code>%{key: "value"}</code> — キーバリューストア（任意の型をキーに使用可）</li>
  <li><strong>キーワードリスト</strong> - <code>[name: "Elixir"]</code> — アトムキーのリスト（順序保持）</li>
  <li><strong>MapSet</strong> - 重複なし集合</li>
</ul>
<p>リストは <code>hd/1</code>（先頭）と <code>tl/1</code>（残り）で操作します。</p>
`,
    defaultCode: `# リスト
list = [1, 2, 3, 4, 5]
IO.inspect(list)
IO.puts("先頭: \#{hd(list)}")
IO.inspect(tl(list), label: "残り")

# 先頭への追加は O(1)
IO.inspect([0 | list])

# リストの連結
IO.inspect([1, 2] ++ [3, 4])

# タプル
tuple = {:ok, "success", 200}
IO.inspect(tuple)
IO.puts("要素1: \#{elem(tuple, 1)}")
IO.puts("サイズ: \#{tuple_size(tuple)}")

# マップ
user = %{name: "Alice", age: 30, city: "Tokyo"}
IO.inspect(user)
IO.puts("名前: \#{user.name}")
IO.puts("年齢: \#{user[:age]}")

# マップの更新（新しいマップを作成）
updated = %{user | age: 31}
IO.inspect(updated)

# キーワードリスト（オプション渡しに使用）
opts = [timeout: 5000, retry: 3]
IO.inspect(opts)
IO.puts("timeout: \#{opts[:timeout]}")

# MapSet
set = MapSet.new([1, 2, 3, 2, 1])
IO.inspect(set)
IO.puts("member? \#{MapSet.member?(set, 2)}")
IO.inspect(MapSet.union(set, MapSet.new([4, 5])))`,
  },
  {
    title: "文字列",
    description: `
<h2>文字列</h2>
<p>Elixir の文字列は UTF-8 エンコードされたバイナリです。</p>
<h3>主な文字列操作</h3>
<ul>
  <li><code>String.length/1</code> - 文字数</li>
  <li><code>String.upcase/1</code>, <code>String.downcase/1</code></li>
  <li><code>String.split/2</code>, <code>String.join/2</code></li>
  <li><code>String.replace/3</code>, <code>String.contains?/2</code></li>
  <li><code>String.trim/1</code>, <code>String.pad_leading/3</code></li>
</ul>
<h3>シジル（Sigils）</h3>
<p><code>~s{...}</code> 文字列、<code>~S{...}</code> 生文字列（エスケープなし）<br>
<code>~w{a b c}</code> 単語リスト、<code>~r/pattern/</code> 正規表現</p>
<h3>ヒアドキュメント</h3>
<p><code>"""..."""</code> で複数行文字列を記述できます。</p>
`,
    defaultCode: `# 基本的な文字列操作
str = "Hello, Elixir!"
IO.puts(String.length(str))           # 文字数
IO.puts(String.upcase(str))
IO.puts(String.downcase(str))
IO.puts(String.reverse(str))

# 分割・結合
words = String.split("one two three", " ")
IO.inspect(words)
IO.puts(Enum.join(words, ", "))

# 検索・置換
IO.puts(String.contains?(str, "Elixir"))
IO.puts(String.replace(str, "Elixir", "World"))
IO.puts(String.starts_with?(str, "Hello"))

# トリム・パディング
IO.puts(String.trim("  hello  "))
IO.puts(String.pad_leading("42", 6, "0"))   # "000042"

# シジル
words_list = ~w(apple banana cherry)
IO.inspect(words_list)

atom_list = ~w(foo bar baz)a   # アトムのリスト
IO.inspect(atom_list)

# 正規表現
IO.puts(String.match?("hello123", ~r/\d+/))
IO.inspect(Regex.scan(~r/\d+/, "abc123def456"))

# ヒアドキュメント（複数行文字列）
text = """
  行1
  行2
  行3
  """
IO.puts(text)

# 文字列補間
name = "Elixir"
version = 1
IO.puts("Language: \#{name}, Version: \#{version}")`,
  },
  {
    title: "パターンマッチ",
    description: `
<h2>パターンマッチ</h2>
<p>Elixir の <code>=</code> は「マッチ演算子」です。代入ではなく、左辺と右辺のパターンを照合します。</p>
<ul>
  <li><strong>変数束縛</strong> - <code>x = 1</code></li>
  <li><strong>タプル分解</strong> - <code>{a, b} = {1, 2}</code></li>
  <li><strong>リスト分解</strong> - <code>[h | t] = [1, 2, 3]</code></li>
  <li><strong>マップ分解</strong> - <code>%{name: name} = user</code></li>
  <li><strong>ピン演算子 ^</strong> - 既存変数の値でマッチ（再束縛しない）</li>
  <li><strong>case</strong> - パターンで分岐</li>
  <li><strong>ガード</strong> - <code>when</code> で条件を追加</li>
</ul>
<p>マッチに失敗すると <code>MatchError</code> が発生します。</p>
`,
    defaultCode: `# 基本的なパターンマッチ
x = 42
IO.puts("x = \#{x}")

# タプルの分解
{status, message, code} = {:ok, "success", 200}
IO.puts("\#{status}: \#{message} (\#{code})")

# リストの分解
[first, second | rest] = [1, 2, 3, 4, 5]
IO.puts("first=\#{first}, second=\#{second}")
IO.inspect(rest, label: "rest")

# マップの分解（部分マッチ可）
user = %{name: "Alice", age: 30, city: "Tokyo"}
%{name: name, age: age} = user
IO.puts("名前: \#{name}, 年齢: \#{age}")

# ピン演算子 ^ （再束縛せずにマッチ）
x = 1
{^x, y} = {1, 2}    # x=1 であることを確認してyに2を束縛
IO.puts("y = \#{y}")

# case でパターンマッチ
result = {:error, "not found", 404}
case result do
  {:ok, data} -> IO.puts("成功: \#{data}")
  {:error, msg, 404} -> IO.puts("404エラー: \#{msg}")
  {:error, msg, _} -> IO.puts("エラー: \#{msg}")
end

# ガード（when）
classify = fn
  x when x > 0 -> "正"
  x when x < 0 -> "負"
  _ -> "ゼロ"
end
IO.puts(classify.(10))
IO.puts(classify.(-3))
IO.puts(classify.(0))

# 関数引数でのパターンマッチ（case と同等）
describe = fn
  [] -> "空リスト"
  [_] -> "要素1つ"
  [_, _ | _] -> "複数要素"
end
IO.puts(describe.([]))
IO.puts(describe.([:a]))
IO.puts(describe.([:a, :b, :c]))`,
  },
  {
    title: "制御フロー",
    description: `
<h2>制御フロー</h2>
<h3>if / unless</h3>
<p>Elixir では <code>if</code> は式です（値を返します）。<code>false</code> と <code>nil</code> だけが偽です。</p>
<h3>case</h3>
<p>パターンマッチで複数のケースを処理します。ガード（<code>when</code>）を付けることもできます。</p>
<h3>cond</h3>
<p>最初に真になる条件の節を実行します。<code>if/else if</code> の代替です。</p>
<h3>with</h3>
<p>複数のパターンマッチを連鎖させます。失敗した場合は <code>else</code> 節で処理します。</p>
`,
    defaultCode: `# if / unless（式として値を返す）
x = 10
result = if x > 5 do
  "大きい"
else
  "小さい"
end
IO.puts(result)

unless x == 0 do
  IO.puts("ゼロではありません")
end

# false と nil だけが偽（0, "" はtruthyに注意！）
IO.puts(if(0,   do: "truthy", else: "falsy"))    # 0 は truthy
IO.puts(if(nil, do: "truthy", else: "falsy"))    # nil は falsy
IO.puts(if("",  do: "truthy", else: "falsy"))    # "" は truthy

# case
http_code = 404
case http_code do
  200 -> IO.puts("OK")
  201 -> IO.puts("Created")
  404 -> IO.puts("Not Found")
  500 -> IO.puts("Server Error")
  code when code >= 400 -> IO.puts("Client Error: \#{code}")
  _ -> IO.puts("Unknown: \#{http_code}")
end

# cond（複数条件の分岐）
score = 75
grade = cond do
  score >= 90 -> "A"
  score >= 80 -> "B"
  score >= 70 -> "C"
  score >= 60 -> "D"
  true        -> "F"  # デフォルト（必須）
end
IO.puts("成績: \#{grade}")

# with（複数のマッチを連鎖、失敗時はelse）
parse_and_double = fn str ->
  with {:ok, n} <- (case Integer.parse(str) do
                      {n, ""} -> {:ok, n}
                      _ -> {:error, "数値ではありません"}
                    end),
       true <- n > 0 || {:error, "正の数が必要です"} do
    {:ok, n * 2}
  else
    {:error, msg} -> {:error, msg}
    false -> {:error, "正の数が必要です"}
  end
end
IO.inspect(parse_and_double.("21"))
IO.inspect(parse_and_double.("abc"))
IO.inspect(parse_and_double.("-5"))`,
  },
  {
    title: "関数",
    description: `
<h2>関数</h2>
<p>Elixir の関数には2種類あります：</p>
<ul>
  <li><strong>無名関数</strong> - <code>fn x -> x * 2 end</code>（呼び出し: <code>func.(arg)</code>）</li>
  <li><strong>名前付き関数</strong> - モジュール内で <code>def</code> で定義</li>
</ul>
<h3>キャプチャ演算子 &amp;</h3>
<p><code>&amp;Module.func/arity</code> で既存の名前付き関数を無名関数に変換。<br>
<code>&amp;(&amp;1 * 2)</code> で簡略記法の無名関数（<code>&amp;1</code> が第1引数）。</p>
<h3>パイプ演算子 |&gt;</h3>
<p>左の式の結果を右の関数の第1引数として渡します。データ変換チェーンを読みやすく書けます。</p>
<h3>クロージャ</h3>
<p>無名関数は外部スコープの変数をキャプチャします。</p>
`,
    defaultCode: `# 無名関数
double = fn x -> x * 2 end
IO.puts(double.(5))

# 複数節の無名関数（パターンマッチ）
describe = fn
  0             -> "ゼロ"
  x when x > 0 -> "正の数: \#{x}"
  x             -> "負の数: \#{x}"
end
IO.puts(describe.(0))
IO.puts(describe.(42))
IO.puts(describe.(-7))

# キャプチャ演算子 &
square = &(&1 * &1)
IO.puts(square.(5))

add = &(&1 + &2)
IO.puts(add.(3, 4))

# 既存関数のキャプチャ
upcase = &String.upcase/1
IO.puts(upcase.("hello"))

# パイプ演算子 |>
result =
  "  Hello, World!  "
  |> String.trim()
  |> String.downcase()
  |> String.replace(",", "")
  |> String.split(" ")
  |> Enum.map(&String.capitalize/1)
  |> Enum.join(" ")
IO.puts(result)

# Enum でのキャプチャ活用
[1, 2, 3, 4, 5]
|> Enum.map(&(&1 * &1))
|> Enum.filter(&(&1 > 5))
|> IO.inspect(label: "二乗して5超")

# クロージャ（外部変数をキャプチャ）
make_adder = fn n -> fn x -> x + n end end
add10 = make_adder.(10)
IO.puts(add10.(5))    # 15
IO.puts(add10.(20))   # 30

# 関数の引数としての関数
apply_twice = fn f, x -> f.(f.(x)) end
IO.puts(apply_twice.(double, 3))    # 12`,
  },
  {
    title: "モジュール",
    description: `
<h2>モジュール</h2>
<p><code>defmodule</code> でモジュールを定義します。</p>
<ul>
  <li><code>def</code> - 公開関数</li>
  <li><code>defp</code> - プライベート関数（モジュール外から呼び出し不可）</li>
  <li><code>@attribute</code> - モジュール属性（コンパイル時定数・メタデータ）</li>
  <li><code>@moduledoc</code> / <code>@doc</code> - ドキュメント</li>
</ul>
<h3>関数節（Function Clauses）</h3>
<p>同名の関数を複数定義して、パターンマッチで節を選択できます。ガード（<code>when</code>）も使えます。</p>
<h3>デフォルト引数</h3>
<p><code>def greet(name \\\\ "World")</code> で引数にデフォルト値を設定します。</p>
`,
    defaultCode: `defmodule Calculator do
  @moduledoc "基本的な計算を行うモジュール"

  # モジュール属性（コンパイル時定数）
  @pi 3.14159265358979

  @doc "2つの数を足します"
  def add(a, b), do: a + b

  @doc "2つの数を掛けます"
  def multiply(a, b), do: a * b

  @doc "円の面積を計算します"
  def circle_area(r), do: @pi * r * r

  # プライベート関数（外部から呼び出し不可）
  defp validate(x) when x < 0, do: {:error, "負の数は使えません"}
  defp validate(x), do: {:ok, x}

  def safe_sqrt(x) do
    case validate(x) do
      {:ok, n}    -> {:ok, :math.sqrt(n)}
      error       -> error
    end
  end
end

IO.puts(Calculator.add(3, 4))
IO.puts(Calculator.multiply(6, 7))
IO.puts(Calculator.circle_area(5))
IO.inspect(Calculator.safe_sqrt(16))
IO.inspect(Calculator.safe_sqrt(-1))

# 関数節（複数節）のモジュール
defmodule Greeter do
  def greet(:en, name), do: "Hello, \#{name}!"
  def greet(:ja, name), do: "こんにちは、\#{name}！"
  def greet(:es, name), do: "¡Hola, \#{name}!"
  def greet(_, name),   do: "Hi, \#{name}!"
end

IO.puts(Greeter.greet(:en, "Alice"))
IO.puts(Greeter.greet(:ja, "太郎"))
IO.puts(Greeter.greet(:es, "Carlos"))
IO.puts(Greeter.greet(:fr, "Marie"))

# デフォルト引数
defmodule Padder do
  def pad(str, width \\\\ 10, char \\\\ " ") do
    String.pad_leading(str, width, char)
  end
end

IO.puts(Padder.pad("hello"))
IO.puts(Padder.pad("hello", 15))
IO.puts(Padder.pad("42", 8, "0"))`,
  },
  {
    title: "再帰",
    description: `
<h2>再帰</h2>
<p>Elixir は純粋な関数型言語のため、ループの代わりに再帰を使います。<code>Enum</code> モジュールが多くの場合に代替になります。</p>
<h3>末尾再帰（Tail Recursion）</h3>
<p>再帰呼び出しが関数の最後の操作の場合、Elixir はスタックを消費しません（末尾呼び出し最適化: TCO）。</p>
<h3>アキュムレータパターン</h3>
<p>末尾再帰を実現するため、結果を蓄積する引数（アキュムレータ）を使います。</p>
<pre><code>def sum(list, acc \\\\ 0)
def sum([], acc), do: acc
def sum([h | t], acc), do: sum(t, acc + h)</code></pre>
`,
    defaultCode: `defmodule Recursive do
  # 階乗（非末尾再帰）
  def factorial(0), do: 1
  def factorial(n) when n > 0, do: n * factorial(n - 1)

  # 階乗（末尾再帰 + アキュムレータ）
  def factorial_tail(n, acc \\\\ 1)
  def factorial_tail(0, acc), do: acc
  def factorial_tail(n, acc), do: factorial_tail(n - 1, n * acc)

  # フィボナッチ数列（末尾再帰）
  def fib(n), do: fib(n, 0, 1)
  defp fib(0, a, _), do: a
  defp fib(n, a, b), do: fib(n - 1, b, a + b)

  # リストの合計（末尾再帰）
  def sum(list, acc \\\\ 0)
  def sum([], acc), do: acc
  def sum([h | t], acc), do: sum(t, acc + h)

  # リストを逆にする
  def reverse(list, acc \\\\ [])
  def reverse([], acc), do: acc
  def reverse([h | t], acc), do: reverse(t, [h | acc])

  # マイリスト map 実装
  def my_map([], _f), do: []
  def my_map([h | t], f), do: [f.(h) | my_map(t, f)]

  # フラット化
  def flatten([]), do: []
  def flatten([h | t]) when is_list(h), do: flatten(h) ++ flatten(t)
  def flatten([h | t]), do: [h | flatten(t)]

  # zip
  def zip([], _), do: []
  def zip(_, []), do: []
  def zip([h1 | t1], [h2 | t2]), do: [{h1, h2} | zip(t1, t2)]
end

IO.puts(Recursive.factorial(10))
IO.puts(Recursive.factorial_tail(10))
IO.puts(Recursive.fib(10))          # 55
IO.puts(Recursive.sum([1, 2, 3, 4, 5]))
IO.inspect(Recursive.reverse([1, 2, 3, 4, 5]))
IO.inspect(Recursive.my_map([1, 2, 3], &(&1 * 2)))
IO.inspect(Recursive.flatten([1, [2, 3], [4, [5, 6]]]))
IO.inspect(Recursive.zip([:a, :b, :c], [1, 2, 3]))`,
  },
  {
    title: "Enum",
    description: `
<h2>Enum モジュール</h2>
<p><code>Enum</code> はコレクションを操作する豊富な関数を提供します。すべての操作は即時評価です。</p>
<h3>主な関数</h3>
<ul>
  <li><code>map/2</code> 変換、<code>filter/2</code> フィルタ、<code>reduce/3</code> 集約</li>
  <li><code>sort/2</code>、<code>sort_by/3</code>、<code>group_by/3</code></li>
  <li><code>flat_map/2</code>、<code>zip/2</code>、<code>uniq/1</code></li>
  <li><code>any?/2</code>、<code>all?/2</code>、<code>count/2</code>、<code>find/3</code></li>
  <li><code>chunk_every/2</code>、<code>take/2</code>、<code>drop/2</code></li>
</ul>
<h3>リスト内包表記</h3>
<p><code>for x &lt;- list, フィルタ条件, do: 式</code></p>
`,
    defaultCode: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map - 変換
IO.inspect(Enum.map(numbers, &(&1 * 2)))

# filter - フィルタリング
IO.inspect(Enum.filter(numbers, &(rem(&1, 2) == 0)))

# reduce - 集約
IO.puts(Enum.reduce(numbers, 0, &(&1 + &2)))
IO.puts(Enum.sum(numbers))
IO.puts(Enum.product(numbers))

# sort
words = ["banana", "apple", "cherry", "date"]
IO.inspect(Enum.sort(words))
IO.inspect(Enum.sort_by(words, &String.length/1))
IO.inspect(Enum.sort(numbers, :desc))

# group_by
IO.inspect(Enum.group_by(numbers, fn x ->
  if rem(x, 2) == 0, do: :even, else: :odd
end))

# any? / all? / count / find
IO.puts(Enum.any?(numbers, &(&1 > 9)))
IO.puts(Enum.all?(numbers, &(&1 > 0)))
IO.puts(Enum.count(numbers, &(rem(&1, 2) == 0)))
IO.inspect(Enum.find(numbers, &(&1 > 5)))

# flat_map
IO.inspect(Enum.flat_map([1, 2, 3], fn x -> [x, x * 10] end))

# zip
IO.inspect(Enum.zip([:a, :b, :c], [1, 2, 3]))

# chunk_every
IO.inspect(Enum.chunk_every(numbers, 3))

# リスト内包表記
squares = for x <- 1..5, do: x * x
IO.inspect(squares)

# ガード付き内包表記
even_squares = for x <- 1..10, rem(x, 2) == 0, do: x * x
IO.inspect(even_squares)

# 複数のジェネレーター
pairs = for x <- 1..3, y <- 1..3, x != y, do: {x, y}
IO.inspect(pairs)`,
  },
  {
    title: "Stream（遅延評価）",
    description: `
<h2>Stream（遅延評価）</h2>
<p><code>Stream</code> は <code>Enum</code> の遅延版です。コレクションを一度にメモリに読み込まずに処理します。</p>
<h3>Enum vs Stream</h3>
<ul>
  <li><strong>Enum</strong> — 即時評価。各ステップで中間リストを作成。</li>
  <li><strong>Stream</strong> — 遅延評価。最終的な収集まで計算しない。大きなデータや無限列に効率的。</li>
</ul>
<h3>無限ストリーム</h3>
<p><code>Stream.iterate/2</code>、<code>Stream.cycle/1</code>、<code>Stream.unfold/2</code>、<code>Stream.repeatedly/1</code> で無限ストリームを作れます。</p>
`,
    defaultCode: `# Stream の基本（まだ計算されていない）
stream = Stream.map(1..100, &(&1 * 2))
result = stream |> Enum.take(5)
IO.inspect(result)

# パイプラインの比較
# Stream: 要素ごとにパイプライン全体を処理
stream_result =
  1..1000
  |> Stream.map(&(&1 * 2))
  |> Stream.filter(&(rem(&1, 6) == 0))
  |> Enum.take(5)   # ここで初めて評価
IO.inspect(stream_result)

# 無限ストリーム：自然数
naturals = Stream.iterate(1, &(&1 + 1))
IO.inspect(Enum.take(naturals, 10))

# フィボナッチ数列（無限）
fibs =
  Stream.unfold({0, 1}, fn {a, b} -> {a, {b, a + b}} end)
IO.inspect(Enum.take(fibs, 12))

# 無限サイクル
colors = Stream.cycle([:red, :green, :blue])
IO.inspect(Enum.take(colors, 7))

# Stream.repeatedly
IO.inspect(Stream.repeatedly(fn -> :rand.uniform(100) end) |> Enum.take(5))

# Stream.with_index
["apple", "banana", "cherry"]
|> Stream.with_index(1)
|> Enum.map(fn {fruit, i} -> "\#{i}. \#{fruit}" end)
|> Enum.each(&IO.puts/1)

# Stream.zip
first_10_fibs  = fibs |> Enum.take(10)
first_10_nats  = naturals |> Enum.take(10)
IO.inspect(Enum.zip(first_10_nats, first_10_fibs))

# Stream.scan（累積）
running_sum =
  1..10
  |> Stream.scan(0, &(&1 + &2))
  |> Enum.to_list()
IO.inspect(running_sum)`,
  },
  {
    title: "マップと構造体",
    description: `
<h2>マップと構造体</h2>
<h3>Map 操作</h3>
<p><code>Map</code> モジュールには豊富な操作関数があります。</p>
<ul>
  <li><code>Map.put/3</code>、<code>Map.get/3</code>、<code>Map.delete/2</code></li>
  <li><code>Map.merge/2</code>、<code>Map.update/4</code>、<code>Map.update!/3</code></li>
  <li><code>Map.keys/1</code>、<code>Map.values/1</code>、<code>Map.to_list/1</code></li>
  <li><code>get_in/2</code>、<code>put_in/3</code>、<code>update_in/3</code>（ネスト操作）</li>
</ul>
<h3>構造体（Struct）</h3>
<p><code>defstruct</code> でフィールドを持つ型安全なマップを定義します。マップのすべての操作と、型チェック（<code>is_struct/2</code>）が使えます。</p>
`,
    defaultCode: `# Map 操作
user = %{name: "Alice", age: 30, city: "Tokyo"}

# アクセス
IO.puts(user.name)
IO.puts(user[:age])
IO.puts(Map.get(user, :email, "N/A"))  # デフォルト値あり

# 更新（新しいマップを返す）
updated = %{user | age: 31}
IO.inspect(updated)

# キーの追加・削除
with_email = Map.put(user, :email, "alice@example.com")
IO.inspect(with_email)
without_city = Map.delete(user, :city)
IO.inspect(without_city)

# マージ
extra = %{hobby: "coding", lang: "Elixir"}
merged = Map.merge(user, extra)
IO.inspect(merged)

# update_in / get_in (ネストしたマップ)
data = %{user: %{profile: %{score: 100}}}
updated_data = update_in(data, [:user, :profile, :score], &(&1 + 50))
IO.puts(get_in(updated_data, [:user, :profile, :score]))

# 構造体の定義
defmodule Point do
  defstruct [:x, :y, z: 0]
end

defmodule Circle do
  defstruct [:center, radius: 1.0]
  def area(%Circle{radius: r}), do: :math.pi() * r * r
  def perimeter(%Circle{radius: r}), do: 2 * :math.pi() * r
end

# 構造体の作成
p = %Point{x: 1, y: 2}
IO.inspect(p)
IO.puts(p.x)

c = %Circle{center: p, radius: 5.0}
IO.puts("面積: \#{Float.round(Circle.area(c), 2)}")

# 構造体の更新
c2 = %{c | radius: 10.0}
IO.puts("面積: \#{Float.round(Circle.area(c2), 2)}")

# パターンマッチ
%Point{x: x, y: y} = p
IO.puts("x=\#{x}, y=\#{y}")

# is_struct チェック
IO.puts(is_struct(p, Point))
IO.puts(is_struct(%{x: 1}, Point))`,
  },
  {
    title: "プロトコル",
    description: `
<h2>プロトコル</h2>
<p>プロトコルは Elixir のポリモーフィズム機構です。異なる型に対して同じインターフェースを実装できます。</p>
<h3>プロトコルの定義と実装</h3>
<pre><code>defprotocol Describable do
  def describe(value)
end

defimpl Describable, for: Integer do
  def describe(n), do: "整数: \#{n}"
end</code></pre>
<h3>組み込みプロトコル</h3>
<ul>
  <li><code>String.Chars</code> — <code>to_string/1</code> / 文字列補間</li>
  <li><code>Inspect</code> — <code>IO.inspect/1</code></li>
  <li><code>Enumerable</code> — <code>Enum</code> との連携</li>
  <li><code>Collectable</code> — <code>Enum.into/2</code></li>
</ul>
`,
    defaultCode: `# プロトコルの定義
defprotocol Shapeable do
  @doc "面積を計算する"
  def area(shape)

  @doc "説明文を返す"
  def describe(shape)
end

# 構造体の定義
defmodule Rect do
  defstruct [:width, :height]
end
defmodule Triangle do
  defstruct [:base, :height]
end
defmodule Disk do
  defstruct [:radius]
end

# 各型への実装
defimpl Shapeable, for: Rect do
  def area(%Rect{width: w, height: h}), do: w * h
  def describe(%Rect{width: w, height: h}), do: "長方形 \#{w}×\#{h}"
end

defimpl Shapeable, for: Triangle do
  def area(%Triangle{base: b, height: h}), do: b * h / 2
  def describe(%Triangle{base: b, height: h}), do: "三角形 底辺\#{b} 高さ\#{h}"
end

defimpl Shapeable, for: Disk do
  def area(%Disk{radius: r}), do: :math.pi() * r * r
  def describe(%Disk{radius: r}), do: "円 半径\#{r}"
end

# 使用例
shapes = [
  %Rect{width: 4, height: 3},
  %Triangle{base: 6, height: 4},
  %Disk{radius: 5}
]

Enum.each(shapes, fn shape ->
  area = shape |> Shapeable.area() |> Float.round(2)
  IO.puts("\#{Shapeable.describe(shape)}: 面積 = \#{area}")
end)

# 合計面積
total = Enum.sum(Enum.map(shapes, &Shapeable.area/1))
IO.puts("合計面積: \#{Float.round(total, 2)}")

# String.Chars プロトコルの実装
defimpl String.Chars, for: Rect do
  def to_string(%Rect{width: w, height: h}), do: "Rect(\#{w}x\#{h})"
end

rect = %Rect{width: 3, height: 4}
IO.puts("文字列化: \#{rect}")    # String.Chars が呼ばれる

# Inspect プロトコル（デフォルト実装）
IO.inspect(rect)`,
  },
  {
    title: "with とエラー処理",
    description: `
<h2>with とエラー処理</h2>
<h3>with 式</h3>
<p>複数のパターンマッチを連鎖させます。どれかが失敗すると <code>else</code> 節に移ります。<code>{:ok, _}/{:error, _}</code> パターンと組み合わせて使うのが定石です。</p>
<h3>try / rescue / after</h3>
<p>例外を捕捉します。通常は <code>with</code> や <code>{:ok, _}/{:error, _}</code> タプルを推奨します。</p>
<h3>カスタム例外</h3>
<p><code>defexception</code> でアプリケーション固有の例外を定義できます。</p>
`,
    defaultCode: `# with 式 - 複数ステップのバリデーション
defmodule UserRegistration do
  def register(params) do
    with {:ok, name}  <- validate_name(params[:name]),
         {:ok, age}   <- validate_age(params[:age]),
         {:ok, email} <- validate_email(params[:email]) do
      {:ok, %{name: name, age: age, email: email}}
    else
      {:error, field, msg} -> {:error, "\#{field}: \#{msg}"}
    end
  end

  defp validate_name(nil),  do: {:error, :name, "必須です"}
  defp validate_name(""),   do: {:error, :name, "空にできません"}
  defp validate_name(name), do: {:ok, name}

  defp validate_age(age) when is_integer(age) and age >= 18, do: {:ok, age}
  defp validate_age(age) when is_integer(age), do: {:error, :age, "18歳以上が必要です"}
  defp validate_age(_), do: {:error, :age, "数値が必要です"}

  defp validate_email(email) when is_binary(email) do
    if String.contains?(email, "@"),
      do: {:ok, email},
      else: {:error, :email, "@ が必要です"}
  end
  defp validate_email(_), do: {:error, :email, "文字列が必要です"}
end

IO.inspect(UserRegistration.register(%{name: "Alice", age: 25, email: "alice@example.com"}))
IO.inspect(UserRegistration.register(%{name: "", age: 25, email: "alice@example.com"}))
IO.inspect(UserRegistration.register(%{name: "Alice", age: 15, email: "alice@example.com"}))
IO.inspect(UserRegistration.register(%{name: "Alice", age: 25, email: "invalid"}))

# try / rescue
result = try do
  String.to_integer("not a number")
rescue
  e in ArgumentError -> {:error, e.message}
end
IO.inspect(result)

# カスタム例外
defmodule ValidationError do
  defexception [:message, :field]
end

try do
  raise ValidationError, message: "無効な値", field: :email
rescue
  e in ValidationError ->
    IO.puts("ValidationError on \#{e.field}: \#{e.message}")
end

# try / after（リソース解放保証）
try do
  result = 10 / 2
  IO.puts("結果: \#{result}")
after
  IO.puts("（クリーンアップ処理）")
end`,
  },
  {
    title: "プロセス",
    description: `
<h2>プロセス</h2>
<p>Elixir のプロセスは OS スレッドとは異なる軽量プロセスです。数百万個同時起動が可能で、状態はメモリを共有しません。</p>
<h3>基本操作</h3>
<ul>
  <li><code>spawn/1</code> — 新しいプロセスを起動（PID を返す）</li>
  <li><code>send/2</code> — メッセージ送信（非同期・失敗しない）</li>
  <li><code>receive/1</code> — メッセージ受信（パターンマッチ）</li>
  <li><code>self/0</code> — 自分の PID</li>
</ul>
<h3>after で受信タイムアウト</h3>
<pre><code>receive do
  msg -> handle(msg)
after 1000 -> :timeout
end</code></pre>
`,
    defaultCode: `# 自分のPIDを取得
IO.inspect(self())

# 基本的なspawnとメッセージ送信
caller = self()
pid = spawn(fn ->
  receive do
    {:hello, from} ->
      send(from, {:reply, "こんにちは！PID=\#{inspect(self())}"})
  end
end)

send(pid, {:hello, caller})

result = receive do
  {:reply, msg} -> msg
after
  1000 -> "タイムアウト"
end
IO.puts(result)

# カウンターサーバー（再帰プロセス）
defmodule Counter do
  def start(initial \\\\ 0) do
    spawn(fn -> loop(initial) end)
  end

  defp loop(count) do
    receive do
      {:increment, caller} ->
        new_count = count + 1
        send(caller, {:count, new_count})
        loop(new_count)

      {:add, n, caller} ->
        new_count = count + n
        send(caller, {:count, new_count})
        loop(new_count)

      {:get, caller} ->
        send(caller, {:count, count})
        loop(count)

      :stop ->
        IO.puts("カウンター停止 (最終値: \#{count})")
    end
  end
end

counter = Counter.start(0)
me = self()

send(counter, {:increment, me})
receive do {:count, n} -> IO.puts("カウント: \#{n}") end

send(counter, {:add, 5, me})
receive do {:count, n} -> IO.puts("カウント: \#{n}") end

send(counter, {:get, me})
receive do {:count, n} -> IO.puts("最終カウント: \#{n}") end

send(counter, :stop)

# Process モジュール
:timer.sleep(5)
IO.puts("プロセス生存確認: \#{Process.alive?(counter)}")`,
  },
  {
    title: "Task",
    description: `
<h2>Task</h2>
<p><code>Task</code> は非同期処理を簡単に扱うための OTP ラッパーです。<code>spawn</code> より安全で、エラー伝播も適切に行われます。</p>
<h3>主な関数</h3>
<ul>
  <li><code>Task.async/1</code> — 非同期タスクを起動</li>
  <li><code>Task.await/2</code> — 結果を待つ（デフォルト5秒タイムアウト）</li>
  <li><code>Task.async_stream/3</code> — コレクションを並列処理</li>
  <li><code>Task.yield/2</code> — タイムアウト付きで待つ（失敗しない）</li>
  <li><code>Task.shutdown/2</code> — タスクを終了させる</li>
</ul>
`,
    defaultCode: `# Task.async / Task.await
task1 = Task.async(fn ->
  :timer.sleep(10)
  {:result1, 42}
end)

task2 = Task.async(fn ->
  :timer.sleep(5)
  {:result2, "hello"}
end)

# 両方の結果を待つ（並列実行されている）
{:result1, r1} = Task.await(task1)
{:result2, r2} = Task.await(task2)
IO.puts("Task1: \#{r1}")
IO.puts("Task2: \#{r2}")

# Task.async_stream - コレクションの並列処理
items = ["item1", "item2", "item3", "item4", "item5"]

results =
  items
  |> Task.async_stream(fn item ->
    :timer.sleep(5)
    "\#{item} processed"
  end, max_concurrency: 3)
  |> Enum.map(fn {:ok, result} -> result end)
IO.inspect(results)

# タスクのリストを一括管理
tasks =
  1..5
  |> Enum.map(fn i ->
    Task.async(fn -> i * i end)
  end)

squares = Enum.map(tasks, &Task.await/1)
IO.inspect(squares)

# Task.yield（タイムアウト付き、失敗しない）
fast_task = Task.async(fn ->
  :timer.sleep(5)
  "速い処理"
end)

slow_task = Task.async(fn ->
  :timer.sleep(200)
  "遅い処理"
end)

IO.inspect(Task.yield(fast_task, 50))     # {:ok, "速い処理"}
IO.inspect(Task.yield(slow_task, 50))     # nil（タイムアウト）
Task.shutdown(slow_task)                  # クリーンアップ`,
  },
  {
    title: "GenServer",
    description: `
<h2>GenServer</h2>
<p><code>GenServer</code> は OTP の汎用サーバービヘイビアです。状態を持つプロセスのパターンを標準化します。</p>
<h3>コールバック</h3>
<ul>
  <li><code>init/1</code> — 初期化、初期状態を返す</li>
  <li><code>handle_call/3</code> — 同期呼び出し（返信あり）</li>
  <li><code>handle_cast/2</code> — 非同期呼び出し（返信なし）</li>
  <li><code>handle_info/2</code> — その他のメッセージ（<code>send/2</code> など）</li>
  <li><code>terminate/2</code> — 終了時のクリーンアップ</li>
</ul>
<h3>クライアントAPI</h3>
<p><code>GenServer.call/3</code>（同期）と <code>GenServer.cast/2</code>（非同期）</p>
`,
    defaultCode: `defmodule BankAccount do
  use GenServer

  # ===== クライアントAPI =====

  def start_link(initial_balance \\\\ 0) do
    GenServer.start_link(__MODULE__, initial_balance)
  end

  def deposit(pid, amount) do
    GenServer.cast(pid, {:deposit, amount})   # 非同期（返信なし）
  end

  def withdraw(pid, amount) do
    GenServer.call(pid, {:withdraw, amount})  # 同期（結果を返す）
  end

  def balance(pid), do: GenServer.call(pid, :balance)
  def history(pid), do: GenServer.call(pid, :history)

  # ===== サーバーコールバック =====

  @impl GenServer
  def init(initial_balance) do
    {:ok, %{balance: initial_balance, history: []}}
  end

  @impl GenServer
  def handle_cast({:deposit, amount}, state) do
    new_state = %{
      balance: state.balance + amount,
      history: [{:deposit, amount} | state.history]
    }
    {:noreply, new_state}
  end

  @impl GenServer
  def handle_call({:withdraw, amount}, _from, state) do
    if amount <= state.balance do
      new_state = %{
        balance: state.balance - amount,
        history: [{:withdraw, amount} | state.history]
      }
      {:reply, {:ok, new_state.balance}, new_state}
    else
      {:reply, {:error, "残高不足 (残高: \#{state.balance})"}, state}
    end
  end

  @impl GenServer
  def handle_call(:balance, _from, state), do: {:reply, state.balance, state}

  @impl GenServer
  def handle_call(:history, _from, state) do
    {:reply, Enum.reverse(state.history), state}
  end
end

# 使用例
{:ok, account} = BankAccount.start_link(1000)
IO.puts("初期残高: \#{BankAccount.balance(account)}")

BankAccount.deposit(account, 500)
BankAccount.deposit(account, 200)
IO.puts("入金後: \#{BankAccount.balance(account)}")

IO.inspect(BankAccount.withdraw(account, 300))
IO.inspect(BankAccount.withdraw(account, 2000))

IO.puts("最終残高: \#{BankAccount.balance(account)}")
IO.inspect(BankAccount.history(account))`,
  },
  {
    title: "型仕様とドキュメント",
    description: `
<h2>型仕様とドキュメント</h2>
<h3>@spec</h3>
<p>関数の型シグネチャを記述します。<code>Dialyzer</code> で静的解析が可能です。</p>
<pre><code>@spec function_name(arg_types) :: return_type</code></pre>
<h3>@type / @typep / @opaque</h3>
<p>カスタム型を定義します。<code>@typep</code> はプライベート型、<code>@opaque</code> は実装を隠蔽します。</p>
<h3>@doc と @moduledoc</h3>
<p>Markdown 形式のドキュメントを書けます。<code>mix docs</code> で HTML 生成、<code>iex</code> の <code>h</code> コマンドで表示できます。</p>
<h3>組み込み型</h3>
<p><code>integer()</code> <code>float()</code> <code>atom()</code> <code>binary()</code> <code>boolean()</code> <code>list(t)</code> <code>map()</code> <code>tuple()</code> <code>pid()</code> <code>any()</code> <code>none()</code></p>
`,
    defaultCode: `defmodule TypedMath do
  @moduledoc """
  型仕様を持つ数学モジュール。
  @spec で Dialyzer による静的型チェックが可能。
  """

  # カスタム型定義
  @type number_result :: {:ok, number()} | {:error, String.t()}
  @type matrix :: [[number()]]

  @doc """
  2つの数を足します。

  ## 例

      iex> TypedMath.add(1, 2)
      3
  """
  @spec add(number(), number()) :: number()
  def add(a, b), do: a + b

  @doc """
  0除算を安全に処理する割り算。

  ## 例

      iex> TypedMath.safe_divide(10, 2)
      {:ok, 5.0}

      iex> TypedMath.safe_divide(10, 0)
      {:error, "ゼロ除算"}
  """
  @spec safe_divide(number(), number()) :: number_result()
  def safe_divide(_a, 0), do: {:error, "ゼロ除算"}
  def safe_divide(a, b), do: {:ok, a / b}

  @doc """
  リストの平均値を計算します。

  ## 例

      iex> TypedMath.mean([1, 2, 3, 4, 5])
      {:ok, 3.0}
  """
  @spec mean(list(number())) :: number_result()
  def mean([]),   do: {:error, "空リストの平均は計算できません"}
  def mean(list), do: {:ok, Enum.sum(list) / length(list)}

  @doc """
  数値をクランプします（min〜maxの範囲に収める）。
  """
  @spec clamp(number(), number(), number()) :: number()
  def clamp(value, min, max) do
    value |> max(min) |> min(max)
  end
end

# 使用例
IO.puts(TypedMath.add(3, 4))
IO.inspect(TypedMath.safe_divide(10, 3))
IO.inspect(TypedMath.safe_divide(10, 0))
IO.inspect(TypedMath.mean([1, 2, 3, 4, 5]))
IO.inspect(TypedMath.mean([]))
IO.puts(TypedMath.clamp(15, 0, 10))
IO.puts(TypedMath.clamp(-5, 0, 10))
IO.puts(TypedMath.clamp(5, 0, 10))

# 型のチェック（is_* 関数）
IO.puts(is_integer(42))
IO.puts(is_float(3.14))
IO.puts(is_binary("hello"))
IO.puts(is_atom(:ok))
IO.puts(is_list([1, 2]))
IO.puts(is_map(%{a: 1}))
IO.puts(is_function(&IO.puts/1))`,
  },
  {
    title: "マクロ",
    description: `
<h2>マクロ（メタプログラミング）</h2>
<p>Elixir のマクロはコンパイル時にコードを変換します。<code>if</code>、<code>defmodule</code>、<code>use</code> などの多くが実はマクロです。</p>
<h3>AST（抽象構文木）</h3>
<p><code>quote/1</code> でコードを AST（3要素タプル）に変換し、<code>unquote/1</code> でコンパイル時に値を埋め込みます。</p>
<pre><code>quote do: 1 + 2
# => {:+, [context: Elixir, ...], [1, 2]}</code></pre>
<h3>defmacro</h3>
<p>コンパイル時に展開されるマクロを定義します。マクロは引数を評価せずに AST として受け取ります。</p>
<p><strong>注意</strong>: 通常の関数で解決できる場合は関数を優先してください。</p>
`,
    defaultCode: `# AST の確認
ast = quote do
  1 + 2 * 3
end
IO.inspect(ast)

# quote と unquote
x = 42
ast_with_value = quote do
  unquote(x) + 10
end
IO.inspect(ast_with_value)

# シンプルなマクロの定義
defmodule MyMacros do
  # unless を実装するマクロ
  defmacro my_unless(condition, do: body) do
    quote do
      if !unquote(condition) do
        unquote(body)
      end
    end
  end

  # N回繰り返すマクロ
  defmacro times(n, do: body) do
    quote do
      Enum.each(1..unquote(n), fn _ ->
        unquote(body)
      end)
    end
  end

  # 式をログ付きで実行するマクロ
  defmacro log_call(expr) do
    expr_str = Macro.to_string(expr)
    quote do
      result = unquote(expr)
      IO.puts("[LOG] \#{unquote(expr_str)} => \#{inspect(result)}")
      result
    end
  end

  # assert マクロ（テストフレームワークのような）
  defmacro assert(expr) do
    expr_str = Macro.to_string(expr)
    quote do
      if unquote(expr) do
        IO.puts("✓ \#{unquote(expr_str)}")
      else
        IO.puts("✗ \#{unquote(expr_str)}")
      end
    end
  end
end

require MyMacros

# マクロの使用
MyMacros.my_unless(false, do: IO.puts("これは表示されます"))
MyMacros.my_unless(true,  do: IO.puts("これは表示されません"))

MyMacros.times(3, do: IO.puts("Hello!"))

MyMacros.log_call(1 + 2 * 3)
MyMacros.log_call(String.upcase("hello"))

MyMacros.assert(1 + 1 == 2)
MyMacros.assert(1 + 1 == 3)

# Macro モジュールのユーティリティ
ast = quote do: Enum.map([1, 2, 3], &(&1 * 2))
IO.puts(Macro.to_string(ast))`,
  },
];
