// import logo from './logo.svg';
// import './App.css';



let name="Tatvasoft BookStore";
function App() {
  return (

    // this is jsx :  similer to html but sum change in key words due to javascript reserved keyword

    //      in html                in jsx
    //       class         =>     classname
    //      img< src="xyz">  =>   img< src="xyz"/>

    // where you want to write js you can write in { code }

    <>

    {/* comment in jsx */}
    
    <nav>
      <li>home</li>
      <li>about</li>
      <li>contactus</li>
    </nav>
    
    <h1 className="blank">Welcome to {name}</h1>  
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quod ipsam temporibus aut dolore. Accusantium, autem odio ea quisquam incidunt ullam magnam placeat possimus repellendus ad, adipisci cumque asperiores libero?
    Exercitationem dolorum, rerum blanditiis reiciendis quia cupiditate animi deserunt modi corrupti veritatis unde, dignissimos accusamus saepe dicta, alias necessitatibus eveniet iure ad facilis ducimus delectus architecto maxime adipisci. Alias, culpa.
    Nobis quae corporis esse possimus minus. Pariatur deleniti facilis illum nostrum consectetur porro itaque atque vero. Ipsa, aspernatur quod. Mollitia nihil deleniti autem voluptates eum, ullam alias magni. Dolores, eos?
    Corporis cumque veniam illum, asperiores tenetur commodi nam. Id non nam delectus facere voluptatibus quos reiciendis, cumque nemo qui inventore! Similique in deleniti aspernatur ipsa fugiat. Dolorem necessitatibus explicabo sed.
    Repudiandae, voluptate iusto atque ullam saepe aspernatur porro itaque enim tempora et? Rem aut ex autem? Nisi officiis eligendi recusandae alias maiores ex tempore nulla, impedit laudantium praesentium velit ullam?
    Iusto repellendus cum veniam saepe! Amet atque earrum, porro ipsa dolore libero earum impedit inventore temporibus aspernatur ipsum quas ab expedita ad eum rem voluptatum.</p>
    
    </>
   
  );
}

export default App;
