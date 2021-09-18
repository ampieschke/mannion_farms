import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">
          Week 1 Breakdown
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Alex</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          For the first time in the history of the Mannion Farms League, a team
          managed by Alex loses in week one. They Burned My Friend put up decent
          numbers, but they didn't stand a chance against this week's high
          points winner, Quack Attack. Mahomes to Kelce was a lethal combination
          and Joe Mixon dropped 25, so even thought Tyreek Hill and CeeDee Lamb
          had great games, it wasn't enough. For the first time in the history
          of the Mannion Farms League, a team managed by Alex loses in week one.
          They Burned My Friend put up decent numbers, but they didn't stand a
          chance against this week's high points winner, Quack Attack. Mahomes
          to Kelce was a lethal combination and Joe Mixon dropped 25, so even
          thought Tyreek Hill and CeeDee Lamb had great games, it wasn't enough.
          For the first time in the history of the Mannion Farms League, a team
          managed by Alex loses in week one. They Burned My Friend put up decent
          numbers, but they didn't stand a chance against this week's high
          points winner, Quack Attack. Mahomes to Kelce was a lethal combination
          and Joe Mixon dropped 25, so even thought Tyreek Hill and CeeDee Lamb
          had great games, it wasn't enough.
        </p>
      </div>
    </div>
  );
}
