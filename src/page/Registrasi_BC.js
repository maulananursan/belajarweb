import React, { Component } from 'react';

class Registrasi_BC extends Component {
	constructor(props){
		super(props)
		this.state={
			judul: 'Contoh Judul',
			contohPerubahan: 'Data Akan diubah',
			valueInput: '',
		}
		this.ubahSTate=this.ubahSTate.bind(this)
	}

	ubahSTate(e){
		e.preventDefault()
		console.log(e.target.value)
		

		// ini digunakan untuk menyamakan inputan dengan state 
		this.setState({valueInput:e.target.value})

		// this.setState((state, props) => ({
		// 	judul: 'Ubah Melalui Input'
		// }))

		// // perubahan state secara regular
		// 		this.setState({judul: 'Merubah Judul'})

		// // perubagan state secara Asynchronous ditulis dengan cara ARROW function
		// 		this.setState((state, props) => ({
		// 		judul: state.contohPerubahan
		// 	}))


		// // perubagan state secara Asynchronous ditulis dengan cara REGULER function
		// 		this.setState(function(state, props){
		// 			return {
		// 				judul: state.contohPerubahan
		// 				}
		// 		})

	}

	render(){
		return(
			<div>
			<h2>{this.state.judul}</h2>
			<p>{this.state.valueInput}</p>
			<input value={this.state.valueInput} onChange={this.ubahSTate} />
			{
			// bisa tulis gini onClick={(e)=>this.ubahSTate(e)}
			//<button type="button" onClick={this.ubahSTate} >Klik Untuk Berubah</button><br />
			}
			</div>
		)
	}
}
export default Registrasi_BC