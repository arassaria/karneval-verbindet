import React from "react";
import styled from "styled-components/macro";

const Livestream = () => {
  return (
    <StreamContainer>
      {/* <FullscreenContainer>
        <Stream
          src="https://kolbe-live.de/embed/video"
          title="Owncast"
          height="350px"
          width="550px"
          referrerpolicy="origin"
          scrolling="no"
          allowFullScreen="yes"
        />
        <a href="https://kolbe-live.de/embed/video" alt="Fullscreen">
          Vollbild
        </a>
      </FullscreenContainer>
      <ChatAuction>
        <iframe
          src="https://kolbe-live.de/embed/chat/readwrite"
          title="Chat"
          height="350px"
          width="300px"
          referrerpolicy="origin"
          scrolling="no"
        ></iframe>
      </ChatAuction> */}
      <h3>
        Der Stream startet am 24.02.2022 um 11:11 Uhr. Wir freuen uns auf euch.
      </h3>
    </StreamContainer>
  );
};

export default Livestream;

// const ChatAuction = styled.div`
//   display: flex;
//   min-width: 550px;
//   margin-right: 56px;
//   justify-content: space-between;
//   @media only screen and (max-width: 550px) {
//     flex-wrap: wrap;
//     min-width: 0;
//   }
// `;

const StreamContainer = styled.div`
  margin-top: 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

// const Stream = styled.iframe`
//   flex-basis: 550px;
// `;

// const FullscreenContainer = styled.div``;
