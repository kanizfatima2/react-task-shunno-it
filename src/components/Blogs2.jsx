import tailwindImage from "../assets/images/posts/tailwindcss.png";
import image from "../assets/images/testimonials/user1.jpg";

const Blogs = () => {
  const blogs = [
    {
      back_image: `${tailwindImage}`,
      title: "frontend",
      author_image: `${image}`,
      author_name: `muhammad asif`,
      date: ` 15 jan 2022`,
      description: "Tailwindcss the complete guide for beginners",
      details: " read more →",
    },
    {
      back_image: `${tailwindImage}`,
      title: "frontend",
      author_image: `${image}`,
      author_name: `muhammad asif`,
      date: ` 15 jan 2022`,
      description: "Tailwindcss the complete guide for beginners",
      details: " read more →",
    },
    {
      back_image: `${tailwindImage}`,
      title: "frontend",
      author_image: `${image}`,
      author_name: `muhammad asif`,
      date: ` 15 jan 2022`,
      description: "Tailwindcss the complete guide for beginners",
      details: " read more →",
    },
    {
      back_image: `${tailwindImage}`,
      title: "frontend",
      author_image: `${image}`,
      author_name: `muhammad asif`,
      date: ` 15 jan 2022`,
      description: "Tailwindcss the complete guide for beginners",
      details: " read more →",
    },
  ];
  return (
    <>
      <section className="blogs" id="blogs">
        <div className="container">
          <h1 className="heading">my blogs</h1>
          <div className="row">
            {blogs.map((b, i) => (
              <div key={i} className="col-lg-3  col-sm-6 col-sm-6 col-xs-12">
                <div className="blogs__card">
                  <div className="blogs__card__image">
                    <img src={b.back_image} alt="post image" />
                    <div className="blogs__card__image__layer">
                      <span className="blogs__card__image__layer__category">
                        {b.title}
                      </span>
                    </div>
                  </div>
                  <div className="blogs__card__author">
                    <div className="blogs__card__author__image">
                      <img src={b.author_image} alt="author image" />
                    </div>
                    <div className="blogs__card__author__details">
                      <span className="blogs__card__author__details__name">
                        {b.author_name}
                      </span>
                      <span className="blogs__card__author__details__date">
                        <i className="bi bi-clock"></i>
                        <span className="blogs__card__author__details__date__time">
                          {b.date}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="blogs__card__body">
                    <h3 className="blogs__card__body__title">
                      <a href="#">{b.description}</a>
                    </h3>
                    <a href="#" className="blogs__card__body__link">
                      {b.details}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
