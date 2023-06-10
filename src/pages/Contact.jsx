import { socialList } from "../utils/UiConstants";

const Contact = () => {
  return (
    <section className=" max-w-4xl px-10 mx-auto flex flex-col mt-20">
      <h2 className=" text-3xl md:text-4xl font-bold font-mono text-center">
        Want To Communicate?
      </h2>

      <p className=" md:text-lg mt-10 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tenetur
        facilis sequi minus consectetur, voluptate quo nostrum quasi distinctio
        ex facere recusandae suscipit eligendi assumenda repellat aperiam
        dolorem labore unde! Sed optio rerum ex nihil, accusamus tenetur nobis
        nesciunt blanditiis repellendus dolores doloribus rem dicta, saepe,
        nulla placeat fugiat alias!
      </p>

      <ul className=" mt-12 flex justify-center gap-6">
        {socialList.map((item) => {
          const { id, Icon } = item;
          return (
            <li key={id}>
              {<Icon className=" text-2xl md:text-3xl text-pink-600" />}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Contact;
