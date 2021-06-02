import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [data, setdata] = useState(["aaa", "ccc", "eee"]);
  const [compdata, setcompdata] = useState(["bbb", "ddd"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="todoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のリスト</p>
        <ul>
          {/* useStateを使って配列データを１つずつ取得する */}
          {data.map((a) => {
            return (
              <div key={data} className="list-row">
                <li>{data}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のリスト</p>
        <ul>
          {compdata.map((b) => {
            return (
              <div key={compdata} className="list-row">
                <li>{compdata}</li>
                <button>完了</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
