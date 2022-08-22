import React, { Component } from 'react'
import './style.css'
import  data from './data.json'
// import {dataGlasses} from './data.js'
export default class BaiTapThuKinh extends Component {
    state={
        isShow:true,
        glass:{
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./img/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    }
  render() {
    console.log('data',data)
    return (
      <div>
        
        <div>
        <title>Virtual Glasses</title>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        {/* Main CSS */}
        <link rel="stylesheet" href="./css/index.css" />
        <div className="container vglasses py-3">
        <h1 className="mb-5 text-center">TRY GLASSES APP ONLINE</h1>
            <div className="row justify-content-between">
            <div className="col-6 vglasses__left">
            
                <div className="row">
                <div className="col-12">
                    
                </div>
                </div>
                <div className="row" id="vglassesList">
                {

                    
                        data.map((value)=>{
                            return(
                                <div className="col-4 my-5" key={value.id} onClick={()=>{
                                    this.setState({
                                        glass:{
                                            url:value.url,
                                            desc:value.desc,
                                            name:value.name
                                        }
                                    })
                                }}>
                                    <img className='img-fluid' src={value.url} alt={value.name} />
                                </div>
                            )
                        })
                        }
                </div>
                

            </div>
            <div className="col-5 vglasses__right p-0">
                <div className="vglasses__card">
                <div className="mb-2 text-right mt-2 mr-2">
                </div>
                <div className="vglasses__model" id="avatar">
                    <img src={this.state.glass.url} alt="" />
                </div>
                <div id="glassesInfo" className="vglasses__info bg-danger">
                    <h2>{this.state.glass.name}</h2>
                    <p>{this.state.glass.desc}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
        {/*  */}
        {/* MAIN JS */}
        </div>


      </div>
    )
  }
}
