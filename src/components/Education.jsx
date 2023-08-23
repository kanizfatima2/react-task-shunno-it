const Education = () => {
  const edu = [
    {
      title: " Diploma Softwer Engineering",
      institute: "Meherpur College of Engineering and Technology",
      date: "2020-2024",
    },
    {
      title: " Diploma Softwer Engineering",
      institute: "Meherpur College of Engineering and Technology",
      date: "2020-2024",
    },
    {
      title: " Diploma Softwer Engineering",
      institute: "Meherpur College of Engineering and Technology",
      date: "2020-2024",
    },
    {
      title: " Diploma Softwer Engineering",
      institute: "Meherpur College of Engineering and Technology",
      date: "2020-2024",
    },
  ];
  return (
    <div>
      <section className="education" id="education">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <h1 className="heading">Education</h1>
              <div className="row --row1">
                {edu.map((e, i) => (
                  <div key={i} className="col-md-6 col-sm-12 col-xs-12">
                    <div className="education__card">
                      <h3 className="education__card__titile">{e.title}</h3>
                      <div className="education__card__block">
                        <span className="education__card__block__left education__card__block__left__house">
                          <i className="bi bi-house-fill" />
                        </span>
                        <span className="education__card__block__right">
                          {e.institute}
                        </span>
                      </div>
                      <div className="education__card__block">
                        <span className="education__card__block__left education__card__block__left__calendar">
                          <i className="bi bi-calendar-fill" />
                        </span>
                        <span className="education__card__block__right">
                          {e.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <h1 className="heading">Experiance</h1>
              <div className="row --row2">
                {edu.map((e, i) => (
                  <div key={i} className="col-md-6 col-sm-12 col-xs-12">
                    <div className="education__card">
                      <h3 className="education__card__titile">{e.title}</h3>
                      <div className="education__card__block">
                        <span className="education__card__block__left education__card__block__left__house">
                          <i className="bi bi-house-fill" />
                        </span>
                        <span className="education__card__block__right">
                          {e.institute}
                        </span>
                      </div>
                      <div className="education__card__block">
                        <span className="education__card__block__left education__card__block__left__calendar">
                          <i className="bi bi-calendar-fill" />
                        </span>
                        <span className="education__card__block__right">
                          {e.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
