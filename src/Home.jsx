import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = 'https://aircall-job.herokuapp.com/activities';

export default function Home() {
  const [feeds, setFeed] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log('Home XXXXXXXXX: ', response.data);
      setFeed(response.data);
    });
  }, []);

  console.log('feeds XXXXXXXX: ', feeds);

  if (!feeds) return null;
  // const [feeds, setFeed] = useState(0);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await axios.get(
  //       'https://aircall-job.herokuapp.com/activities'
  //     );
  //     // username の post があれば表示する、なければ全て表示
  //     // const response = username
  //     //   ? await axios.get(`/posts/profile/${username}`) // if there are username = profile page プロフィールページの場合
  //     //   : await axios.get(`/posts/timeline/${user._id}`); // 62657f2c2101d4a8b995e88c is from mongoDB realsns > users > Nick _id:  This is Home page ホームページの場合
  //     console.log('Home XXXXXXXXX: ', response.data); // Promise {} < this error is waiting, we need await async in frontend  //  Promise {} はデータを受け取っている待ち時間を表示するエラー
  //     setFeed(response.data);
  //   };
  //   fetchPosts();
  // }, []);
  // console.log('feeds XXXXXXXXX: ', feeds);

  // useEffect(() => {
  //   fetch('https://aircall-job.herokuapp.com/activities')
  //     .then((res) => res.json())
  //     // this data is Object
  //     .then((data) => {
  //       console.log('XXXXXXXXX', data);
  //       // [name, setName] update
  //       setFeed(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <main className="flex-shrink-0">
      <div className="px-3">
        <div
          className="alert alert-light border border-secondary  d-flex justify-content-between"
          role="alert"
        >
          <div className="h2">
            <i class="bi bi-archive-fill"></i>
          </div>
          <div>
            <strong className="h6">Archive All Calls</strong>
          </div>
        </div>
        {feeds
          ? feeds.map((feed) => {
              return feed.direction === 'inbound' ? (
                <div
                  className="alert alert-light border border-secondary  d-flex justify-content-between"
                  role="alert"
                >
                  <div className="h2">
                    <i className="bi bi-telephone-inbound-fill"></i>
                  </div>
                  <div>
                    <strong className="h6">
                      {feed.from}
                      {/* <span className="badge text-bg-danger">4</span> */}
                    </strong>
                    <p className="mb-0">
                      {feed.to === null ? 'Unknown' : feed.to}
                    </p>
                  </div>
                  <div>
                    {new Date(feed.created_at)
                      .toLocaleTimeString()
                      .split(':')
                      .slice(0, 2)
                      .join(':')}{' '}
                    <span className="badge text-bg-secondary">
                      {new Date(feed.created_at)
                        .toLocaleTimeString()
                        .split(':')
                        .slice(2, 3)[0]
                        .includes(' AM')
                        ? 'AM'
                        : 'PM'}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className="alert alert-light border border-secondary  d-flex justify-content-between"
                  role="alert"
                >
                  <div className="h2">
                    <i class="bi bi-telephone-outbound-fill"></i>
                  </div>
                  <div>
                    <strong className="h6">
                      {feed.to}
                      {/* <span className="badge text-bg-danger">4</span> */}
                    </strong>
                    <p className="mb-0">
                      {feed.from === null ? 'Unknown' : feed.from}
                    </p>
                  </div>
                  <div>
                    {new Date(feed.created_at)
                      .toLocaleTimeString()
                      .split(':')
                      .slice(0, 2)
                      .join(':')}{' '}
                    <span className="badge text-bg-secondary">
                      {new Date(feed.created_at)
                        .toLocaleTimeString()
                        .split(':')
                        .slice(2, 3)[0]
                        .includes(' AM')
                        ? 'AM'
                        : 'PM'}
                    </span>
                  </div>
                </div>
              );
            })
          : ''}
      </div>
    </main>
  );
}
