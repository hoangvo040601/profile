import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Chào mọi người, Mình là <span className="purple">Võ Văn Hoàng </span>
            Đến từ<span className="purple"> Hồ Chí Minh, Việt Nam</span>
            <br /> Tôi là một người yêu thích lập trình. Mục tiêu ngắn hạn của tôi là lập trình frontend dài hạn hạn Fullstack.
            Hiện tại tôi đã hoàn thiện chương trình học của trường, mong muốn tìm được nơi thực tập để nâng cao kinh nghiệm thực tế.
            <br />
            Ngoài việc lập trình, sở thích của tôi là: 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Đá bóng
            </li>
            <li className="about-activity">
              <ImPointRight /> Đọc truyện
            </li>
            <li className="about-activity">
              <ImPointRight /> Nghe nhạc
            </li>
            <li className="about-activity">
              <ImPointRight />Học hỏi những công nghệ mới
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
