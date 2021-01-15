import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 未完了リストの作成
  createInCompleteList(inputText);
};

// 未完了リストの作成
const createInCompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン生成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    // 完了リストに追加、未完了リストから削除する要素
    const target = completeBtn.parentNode;

    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(target);

    // TODO内容テキストを取得
    const textTarget = target.firstElementChild.innerText;

    // div以下のテキスト要素を初期化する。
    target.textContent = null;

    // li生成
    const li = document.createElement("li");
    li.innerText = textTarget;
    // button生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 戻すボタンの親タグを完了リストから削除
      const backTarget = backButton.parentNode;

      // 完了リストから削除
      document.getElementById("complete-list").removeChild(backTarget);

      // TODO内容テキストを取得
      const textTarget = backTarget.firstElementChild.innerText;

      // div以下のテキスト要素を初期化する。
      backTarget.textContent = null;

      createInCompleteList(textTarget);
    });

    // divの子要素に各要素を設定
    target.appendChild(li);
    target.appendChild(backButton);

    console.log(target);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(target);
  });

  // 削除ボタン生成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteBtn.parentNode);
  });

  // divの子要素に設定
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
