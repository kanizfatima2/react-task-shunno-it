import image1 from "../assets/images/testimonials/user1.jpg";
import image2 from "../assets/images/testimonials/user2.jpg";
import image3 from "../assets/images/testimonials/user3.jpg";
import image4 from "../assets/images/testimonials/user4.jpg";
import image5 from "../assets/images/testimonials/user5.jpg";
import image6 from "../assets/images/testimonials/user6.jpg";

const Testimonial = () => {
  const testimonial = [
    {
      image: `${image1}`,
      name: "saddiq hussain",
      country: "united kingdom",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa ipsam deleniti quas corrupti quibusdam unde provident illum, repellendus enim facere.",
    },
    {
      image: `${image2}`,
      name: "Json Roy",
      country: "Ireland",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa ipsam deleniti quas corrupti quibusdam unde provident illum, repellendus enim facere.",
    },
    {
      image: `${image3}`,
      name: "Mustafa Kamal",
      country: "Turkey",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa ipsam deleniti quas corrupti quibusdam unde provident illum, repellendus enim facere.",
    },
    {
      image: `${image4}`,
      name: "Muhammad Ali",
      country: "Pakistan",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa ipsam deleniti quas corrupti quibusdam unde provident illum, repellendus enim facere.",
    },
  ];
  return (
    <div>
      <section className="testimonials" id="testimonials">
        <div className="container">
          <h1 className="heading">what customers are saying?</h1>
          <div className="row">
            <div className="col-xlg-8 col-md-12  col-sm-12 py-0">
              <div className="row">
                {testimonial.map((t, i) => (
                  <div
                    key={i}
                    className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
                  >
                    <div className="testimonials__card">
                      <div className="testimonials__card__icon">
                        <i className="bi bi-chat-dots" />
                      </div>
                      <div className="testimonials__card__user">
                        <div className="testimonials__card__user__image">
                          <img src={t.image} alt="user image" />
                        </div>
                        <div className="testimonials__card__user__details">
                          <span className="testimonials__card__user__details__name">
                            {t.name}
                          </span>
                          <span className="testimonials__card__user__details__country">
                            {t.country}
                          </span>
                          <span className="testimonials__card__user__details__rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                          </span>
                        </div>
                      </div>
                      <p className="testimonials__card__message">{t.details}</p>
                    </div>
                  </div>
                ))}
                {/* <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="testimonials__card">
                    <div className="testimonials__card__icon">
                      <i className="bi bi-chat-dots" />
                    </div>
                    <div className="testimonials__card__user">
                      <div className="testimonials__card__user__image">
                        <img src={image2} alt="user image" />
                      </div>
                      <div className="testimonials__card__user__details">
                        <span className="testimonials__card__user__details__name">
                          json roy
                        </span>
                        <span className="testimonials__card__user__details__country">
                          ireland
                        </span>
                        <span className="testimonials__card__user__details__rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </span>
                      </div>
                    </div>
                    <p className="testimonials__card__message">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa ipsam deleniti quas corrupti quibusdam unde
                      provident illum, repellendus enim facere.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="testimonials__card">
                    <div className="testimonials__card__icon">
                      <i className="bi bi-chat-dots" />
                    </div>
                    <div className="testimonials__card__user">
                      <div className="testimonials__card__user__image">
                        <img src={image3} alt="user image" />
                      </div>
                      <div className="testimonials__card__user__details">
                        <span className="testimonials__card__user__details__name">
                          mustafa kamal
                        </span>
                        <span className="testimonials__card__user__details__country">
                          turkey
                        </span>
                        <span className="testimonials__card__user__details__rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </span>
                      </div>
                    </div>
                    <p className="testimonials__card__message">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa ipsam deleniti quas corrupti quibusdam unde
                      provident illum, repellendus enim facere.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="testimonials__card">
                    <div className="testimonials__card__icon">
                      <i className="bi bi-chat-dots" />
                    </div>
                    <div className="testimonials__card__user">
                      <div className="testimonials__card__user__image">
                        <img src={image4} alt="user image" />
                      </div>
                      <div className="testimonials__card__user__details">
                        <span className="testimonials__card__user__details__name">
                          muhammad ali
                        </span>
                        <span className="testimonials__card__user__details__country">
                          pakistan
                        </span>
                        <span className="testimonials__card__user__details__rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </span>
                      </div>
                    </div>
                    <p className="testimonials__card__message">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa ipsam deleniti quas corrupti quibusdam unde
                      provident illum, repellendus enim facere.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-xlg-4 col-md-12 col-sm-12 order-1">
              <div className="testimonials__right">
                <h1 className="testimonials__right__heading">
                  That&apos;s the thing i&apos;m motivited
                </h1>
                <div className="testimonials__right__images">
                  <div className="testimonials__right__images__block">
                    <img src={image1} alt="user image" />
                  </div>
                  <div className="testimonials__right__images__block">
                    <img src={image2} alt="user image" />
                  </div>
                  <div className="testimonials__right__images__block">
                    <img src={image3} alt="user image" />
                  </div>
                  <div className="testimonials__right__images__block">
                    <img src={image4} alt="user image" />
                  </div>
                  <div className="testimonials__right__images__block">
                    <img src={image5} alt="user image" />
                  </div>
                  <div className="testimonials__right__images__block">
                    <img src={image6} alt="user image" />
                  </div>
                  <span className="testimonials__right__images__clients">
                    250,00+
                  </span>
                </div>
                <div className="testimonials__right__rating">
                  <span className="testimonials__right__rating__avg">4.9</span>
                  <span className="testimonials__right__rating__stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </span>
                  <span className="testimonials__right__rating__total">
                    (4,582)
                  </span>
                </div>
                <h3 className="testimonials__right__link">
                  <a href="#">Let&apos;s talk about your next project?</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
