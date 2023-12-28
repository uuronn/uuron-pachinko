"use client";

import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import { Ball, Color, OnHold, Video } from "@/types";
import Image from "next/image";
import { draw } from "@/utils/draw";
import { Handle } from "@/components/Handle";
import { OnHoldList } from "@/components/OnHoldList";
import { VIDEO_LIST } from "@/data";

export default function Home() {
  const [onHoldList, setOnHoldList] = useState<OnHold[]>([]);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [ball, setBall] = useState<"hit" | "lose" | null>(null);
  const [ballList, setBallList] = useState<("hit" | "lose")[]>([]);
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [currentOnHold, setCurrentOnHold] = useState<OnHold | null>(null);

  // useEffect(() => {
  //   if (isStart) {
  //     setInterval(() => {
  //       const result = draw();

  //       if (result === "hit") {
  //         const video = VIDEO_LIST[Math.floor(Math.random() * VIDEO_LIST.length)];

  //         console.log("video", video);

  //         setOnHoldList((prev) => {
  //           // const prevLength = [...prev];
  //           if (prev.length >= 5) {
  //             return [...prev];
  //           }

  //           return [...prev, video];
  //         });
  //       }
  //       setBallList((prev) => [...prev, result]);
  //     }, 1000);
  //   }
  // }, [isStart]);

  useEffect(() => {
    if (ball) {
      console.log(ball);
    }
  }, [ball]);

  // useEffect(() => {
  //   console.log(ballList);
  // }, [ballList]);

  // useEffect(() => {
  //   setInterval(() => {
  //     if (onHoldList.length > 1) {
  //       setOnHoldList((prev) => {
  //         const newBallList = [...prev];
  //         console.log("あああ", newBallList);
  //         newBallList.shift();
  //         return newBallList;
  //       });
  //     }
  //   }, 2000);
  // }, [, onHoldList.length]);

  // useEffect(() => {
  //   console.log("ballList", ballList);
  // }, [ballList]);

  const handle = (): void => {
    setIsDisabled(true);

    setIsStart(true);
    setTimeout(() => {
      setIsStart(false);
    }, 1000);

    videoRef.current?.play();
    const result = draw();

    setBall(result);

    const video = VIDEO_LIST[Math.floor(Math.random() * VIDEO_LIST.length)];
    if (result === "hit") {
      setTimeout(() => {
        setCurrentVideo(video.path);
      }, 3000);
      // console.log("video", video);
    }

    setTimeout(() => {
      setBall(null);
    }, 3000);

    setTimeout(() => {
      setIsDisabled(false);
    }, video.time);
  };

  return (
    <main className={styles.main}>
      <div className={styles.video}>
        {ball && (
          <div className={ball === "hit" ? styles.ballSupportHit : styles.ballSupportLose}>
            <span className={styles.ball} />
          </div>
        )}
        {/* {ballList.map((ball, i) => (
          <div className={ball === "hit" ? styles.ballSupportHit : styles.ballSupportLose} key={i}>
            <span className={styles.ball} />
          </div>
        ))} */}
        {/* {ballList.map((ball, i) => {
          console.log("ballList", ballList);
          if (ball === "hit") {
            videoRef.current?.play();
            const video = VIDEO_LIST[Math.floor(Math.random() * VIDEO_LIST.length)];
            setTimeout(() => {
              // setOnHoldList((prev) => [...prev, sample]);
              setCurrentVideo(video.path);
            }, video.time);
          }

          // setBallList((prev) => {
          //   const newBallList = [...prev];
          //   console.log("あああ", newBallList);
          //   newBallList.shift();
          //   return newBallList;
          // });
          return (
            <div
              className={ball === "hit" ? styles.ballSupportHit : styles.ballSupportLose}
              key={i}
            >
              <span className={styles.ball} />
            </div>
          );
        })} */}

        {/* <RouletteNumber /> */}
        <video
          src={currentVideo}
          height={500}
          ref={videoRef}
          autoPlay
          className={styles.test}
          controls
        />
        <Image
          style={{ position: "relative" }}
          width={500}
          height={700}
          src="/stand.png"
          alt="test"
        />
        <Handle isStart={isStart} onClick={handle} disabled={isDisabled} />
      </div>
      <OnHoldList onHoldList={onHoldList} />
    </main>
  );
}
