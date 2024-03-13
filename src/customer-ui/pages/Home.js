import Header from '../components/Header';
import Items from '../components/Items';

function Home() {
    return (

        <div className='customer-home'>
            <Header />
            {/* <h1>Customer Home Page</h1> */}
            {1 ? <Items /> : <div></div>}

        </div>
    );
}

export default Home;
