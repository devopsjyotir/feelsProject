import bgImg from "../image/zac-gudakov-faBWQt9i7dg-unsplash.jpg";
const Form = () => {
  return (
    <section>
      <div className="inputForm">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>Enjoy</span>
          <form id="form" className="flex flex-col">
            <input type="text" placeholder="full name" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="confirm email" />
            <input type="text" placeholder="number" />

            <button className="btn">Register</button>
          </form>
        </div>

        <div className="col-2">
          <img src={bgImg} alt="neighborhood" />
        </div>
      </div>
    </section>
  );
};

export default Form;
