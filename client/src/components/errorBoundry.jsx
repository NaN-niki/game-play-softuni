import { Component } from "react";

//za da bude errorboundry componentata tr da ima edin ot dvata statichni metoda !!!
export default class ErrorBoundry extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }
    
    //shte bude izvikan ako vuznikne problem v prerenderiraneto
    static getDerivedStateFromError(err) {
        return { hasError: true }
    }
    componentDidCatch(err, errinfo){
        //kato efekt ot vuzniknalata greshka napravi...
        //zapishi q nqkude greshkata console.log, napravi zaqvka za a se obraboti!!!!!!
    }
    render() {
        //opredelqme user interface sprqmo tova dali imame greshka ili ne 
        if (this.state.hasError) {
            // pokaji neshto razlichno za da ne gurmi interface (da nqma bql ekran)
            return <div style={{margin: '0 auto'}}>Something went wrong :( 404</div> 
        }
        return this.props.children
    }
}