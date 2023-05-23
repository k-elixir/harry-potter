import React from "react";

export default function HomePage() {
  return (
    <div className="homePage text-center">
      <div className="homePage-FirstPart p-5">
        <div className="container pt-5 mt-5 pb-5 mb-5">
          <hr />
          <h1 className="title p-5">Harry Potter</h1>
          <p className="fs-2">Film series</p>
          <p>based on the eponymous novels by J. K. Rowling</p>
          <hr />
        </div>
      </div>
      <div className="homePage-secondPart p-5">
        <p>
          <span className="fs-5">Welcome</span> to Harry potter world! <br />
          If you know this world you're my friend and nice to meet you, you can
          have fun and find a lot of funny stuff here. <br />
          Let me a little explane my site for you: <br />
          you can go to the Hogwarts by train in the nav, see the all group
          halls and histories, maybe find some wallpapers for your phone in
          gallery, and laugh to the memes. <br />
          but if you don't know anything about this world I'm sorry, I have to
          call you a Muggle :( , don't worry you can learn, and this site is the
          easiest way for you to learn. <br />
          if you have any questions i'm here to answer you. have a lot of fun.
        </p>
      </div>
    </div>
  );
}
