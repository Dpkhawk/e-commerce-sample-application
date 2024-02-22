import './NavigationBar.css'
export default function NavigationBar(){
    return(<>
   <body id='body'>
   <nav>
    <div className='FloatLeft'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Product</a>
            <a href='#'>Contact</a>
            </div>
            <div className='LogIn'><a href='#'>LogIn</a></div>
            
    </nav>
    <img className='img' src="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop"/>
       <p><b>New Register?</b><a href='#'><b>SignIn</b></a></p>
    </body> 
    </>)
}