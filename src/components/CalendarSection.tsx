import React, { useState } from "react";

function CalendarSection() {
  const [showModal, setShowModal] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert(`Đã sao chép số tài khoản ${label}!`);
        })
        .catch((err) => {
          console.error("Lỗi sao chép: ", err);
          fallbackCopyTextToClipboard(text, label);
        });
    } else {
      fallbackCopyTextToClipboard(text, label);
    }
  };

  const fallbackCopyTextToClipboard = (text: string, label: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      alert(`Đã sao chép số tài khoản ${label}!`);
    } catch (err) {
      console.error("Fallback: Lỗi sao chép", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <>
      <div
        className="ele-calendar eles"
        data-id="1735294460842"
        data-type="calendar"
        data-custom-type="calendar" // remove this manually or ignore for now as I need to handle all 'type' occurrences
        data-layername="日历73"
        data-signsort="30"
        data-pid=""
        data-sign="true"
        style={{
          left: "1.61333rem",
          top: "119.962rem",
          width: "8.66667rem",
          height: "8.66667rem",
          transform: "scale(0.855)",
          opacity: 1,
        }}
      >
        <div
          className="ani-wrap"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0)",
            borderRadius: "0rem",
            borderColor: "rgb(242, 119, 149)",
            borderStyle: "solid",
            borderWidth: "0rem",
          }}
        >
          <div className="can-wrap2">
            <div className="can-top">
              <div className="can-size" style={{ color: "rgb(242, 119, 149)" }}>
                18 <span>/</span> 06
              </div>
            </div>
            <div className="can-main">
              <div className="can-week">
                <span style={{ color: "rgb(242, 119, 149)" }}>T2</span>
                <span style={{ color: "rgb(242, 119, 149)" }}>T3</span>
                <span style={{ color: "rgb(242, 119, 149)" }}>T4</span>
                <span style={{ color: "rgb(242, 119, 149)" }}>T5</span>
                <span style={{ color: "rgb(242, 119, 149)" }}>T6</span>
                <span style={{ color: "rgb(242, 119, 149)" }}>T7</span>
                <span style={{ color: "rgb(242, 119, 149)" }}>CN</span>
              </div>
              <div className="can-date">
                <div
                  className="can-year"
                  style={{ color: "rgb(242, 119, 149)" }}
                >
                  2026
                </div>
                <ul>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>1</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>2</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>3</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>4</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>5</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>6</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>7</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>8</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>9</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>10</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>11</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>12</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>13</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>14</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>15</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>16</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>17</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="active heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>18</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>19</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>20</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>21</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>22</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>23</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>24</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>25</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>26</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>27</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>28</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>29</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                  <li className="heart-ani">
                    <span style={{ color: "rgb(242, 119, 149)" }}>30</span>{" "}
                    <i
                      className="iconfont icon-tuoyuanxing"
                      style={{ color: "rgb(242, 119, 149)" }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="ele-text ele-text-long eles"
        data-id="copy-1735287249841"
        data-type="text"
        data-custom-type="text"
        data-layername="文本74"
        data-signsort="31"
        data-signtype="time"
        data-pid=""
        data-sign="true"
        data-namesign=""
        data-copyindex="52"
        style={{
          left: "0rem",
          top: "128.747rem",
          width: "10rem",
          height: "auto",
          transform: "rotate(0deg)",
        }}
      >
        <div
          className="ani-wrap"
          style={{
            borderRadius: "0rem",
            borderColor: "rgb(153, 153, 153)",
            borderStyle: "solid",
            borderWidth: "0rem",
          }}
        >
          <div
            data-link=""
            data-hash=""
            className="text-common text-editor siyuanheitichanggui"
            style={{
              opacity: 1,
              letterSpacing: "0.01rem",
              writingMode: "horizontal-tb",
              padding: "0.13333rem",
              textIndent: "0rem",
              fontSize: "0.34rem",
              color: "rgb(62, 56, 56)",
              textAlign: "center",
              lineHeight: 2.2,
              fontFamily: "siyuanheitichanggui",
            }}
          >
            Thứ Năm, Ngày 18 Tháng 6, 2026
            <br />
            12:00 PM
          </div>
        </div>
      </div>
      <div
        className="ele-text ele-text-long eles"
        data-id="copy-1735296751124"
        data-type="text"
        data-custom-type="text"
        data-layername="Gửi mừng cưới"
        data-signsort="34"
        data-signtype=""
        data-pid=""
        data-sign="true"
        data-namesign=""
        data-copyindex="51"
        style={{
          left: "0rem",
          top: "142.747rem",
          width: "10rem",
          height: "auto",
          transform: "rotate(0deg)",
          cursor: "pointer",
        }}
        onClick={() => setShowModal(true)}
      >
        <div
          className="ani-wrap"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/wedding_gift_envelope.png"
            alt="Gửi mừng cưới"
            className="gift-envelope-img float-ani"
            style={{
              width: "4.5rem",
              height: "auto",
              filter: "drop-shadow(0px 8px 15px rgba(0,0,0,0.08))",
            }}
          />
          <div
            data-link=""
            data-hash=""
            className="text-common text-editor"
            style={{
              opacity: 1,
              letterSpacing: "0.02rem",
              writingMode: "horizontal-tb",
              padding: "0.13333rem",
              textIndent: "0rem",
              fontSize: "0.65rem",
              color: "rgb(242, 119, 149)",
              textAlign: "center",
              lineHeight: 1,
              fontFamily: "meiescript",
              fontWeight: "normal",
            }}
          >
            ·Gửi mừng cưới·
          </div>
        </div>
      </div>

      {/* Phần Thank You Image với Text đè lên */}
      <div
        style={{
          position: "absolute",
          left: "0rem",
          top: "150rem",
          width: "10rem",
          height: "12rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "1.8rem",
          overflow: "hidden",
        }}
      >
        {/* Lớp nền ảnh */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <img
            src="/images/thankyou.jpg"
            alt="Thank You"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* Hiệu ứng mờ dần ở đỉnh và đáy */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, white 0%, transparent 15%, transparent 85%, white 100%)",
            }}
          ></div>
        </div>

        {/* Lớp văn bản đè lên */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "0 1rem",
            textAlign: "center",
            color: "white",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            fontFamily: "ChillHuoFangSong",
            lineHeight: "2",
            fontSize: "0.36rem",
            fontWeight: "normal",
            pointerEvents: "none",
          }}
        >
          “Hẹn gặp bạn trong ngày hạnh phúc của chúng mình.
          <br />
          Rất mong được đón tiếp bạn trong ngày vui đặc biệt này.
          <br />
          Bởi sự hiện diện của bạn chính là niềm hạnh phúc trọn vẹn
          <br />
          của chúng mình.”
        </div>
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(5px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            padding: "1rem",
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "10rem",
              padding: "0.7rem 0.3rem",
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              animation: "modalFadeIn 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
              <h3
                style={{
                  fontSize: "0.5rem",
                  color: "#1a202c",
                  margin: "0 0 0.1rem 0",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Hộp Quà Yêu Thương
              </h3>
              <p style={{ fontSize: "0.32rem", color: "#718096", margin: 0 }}>
                Quét QR code để gửi yêu thương trực tiếp tới:
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "0.15rem",
                marginBottom: "0.5rem",
                alignItems: "stretch",
              }}
            >
              {/* Chú rể */}
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <span
                  style={{
                    fontSize: "0.32rem",
                    color: "#4a6491",
                    fontWeight: "bold",
                    textAlign: "center",
                    display: "block",
                    marginBottom: "0.15rem",
                  }}
                >
                  Chú rể
                </span>
                <div
                  style={{
                    border: "1px solid #e2e8f0",
                    borderRadius: "0.5rem",
                    padding: "0.1rem",
                    backgroundColor: "#f8fafc",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.15rem",
                      cursor: "zoom-in",
                    }}
                    onClick={() => setZoomedImage("/images/qr-hongquan.jpg")}
                  >
                    <img
                      src="/images/qr-hongquan.jpg"
                      alt="QR Chú rể"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "0.1rem",
                      }}
                    />
                  </div>
                  <button
                    onClick={() => handleCopy("19037040456017", "chú rể")}
                    style={{
                      backgroundColor: "#edf2f7",
                      color: "#4a6491",
                      border: "none",
                      borderRadius: "1rem",
                      padding: "0.1rem",
                      width: "100%",
                      fontSize: "0.2rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Sao chép số TK
                  </button>
                </div>
              </div>

              {/* Cô dâu */}
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <span
                  style={{
                    fontSize: "0.32rem",
                    color: "rgb(242, 119, 149)",
                    fontWeight: "bold",
                    textAlign: "center",
                    display: "block",
                    marginBottom: "0.15rem",
                  }}
                >
                  Cô dâu
                </span>
                <div
                  style={{
                    border: "1px solid #fee2e2",
                    borderRadius: "0.5rem",
                    padding: "0.1rem",
                    backgroundColor: "#fffcfc",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.15rem",
                      cursor: "zoom-in",
                    }}
                    onClick={() => setZoomedImage("/images/qr-minhthin.jpg")}
                  >
                    <img
                      src="/images/qr-minhthin.jpg"
                      alt="QR Cô dâu"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "0.1rem",
                      }}
                    />
                  </div>

                  <button
                    onClick={() => handleCopy("0333892556", "cô dâu")}
                    style={{
                      backgroundColor: "#fff5f5",
                      color: "rgb(242, 119, 149)",
                      border: "none",
                      borderRadius: "1rem",
                      padding: "0.1rem",
                      width: "100%",
                      fontSize: "0.2rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Sao chép số TK
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowModal(false)}
              style={{
                width: "100%",
                padding: "0.3rem",
                backgroundColor: "#f7fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "0.5rem",
                color: "#4a5568",
                fontSize: "0.3rem",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {zoomedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20000,
            cursor: "zoom-out",
            animation: "modalFadeIn 0.2s ease-out",
          }}
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage}
            alt="Zoomed QR"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "0.5rem",
              boxShadow: "0 0 30px rgba(255,255,255,0.1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              color: "white",
              fontSize: "0.5rem",
              fontWeight: "bold",
            }}
          >
            ✕
          </div>
        </div>
      )}
    </>
  );
}

export default CalendarSection;
