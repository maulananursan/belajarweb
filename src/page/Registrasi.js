import React, { Component } from 'react';

class Registrasi extends Component {
	constructor(props){
		super(props)
		this.state={
			judul: 'Contoh Judul',
			contohPerubahan: 'Data Akan diubah',
			valueInput: '',
			valueInput2: '',
			valueInput3: '',
			valueInput4: '',
		}
		this.ubahSTate=this.ubahSTate.bind(this)
	}

	ubahSTate(namaValue, e){
		e.preventDefault()
	//	perubahan state secara reguler	
	// 		this.setState({[namaValue]: e.target.value})
	// 	}

	//	perubahan state secara Asynchronous
		var tampungData= e.target.value
		this.setState(function(state, props){
			return {
				[namaValue]: tampungData
			}
		});
	}
	


	render(){
		return(
			<div>
			<h5>Contoh 1</h5>
			<p>{this.state.valueInput}</p>
			<input value={this.state.valueInput} onChange={(e)=> this.ubahSTate("valueInput", e)} />
			<h5>=========================</h5>

			<h5>Contoh 2</h5>
			<p>{this.state.valueInput2}</p>
			<input value={this.state.valueInput2} onChange={(e)=> this.ubahSTate("valueInput2", e)} />
			<h5>=========================</h5>

			<h5>Contoh 3</h5>
			<p>{this.state.valueInput3}</p>
			<input value={this.state.valueInput3} onChange={(e)=> this.ubahSTate("valueInput3", e)} />
			<h5>=========================</h5>

			<h5>Contoh 4</h5>
			<p>{this.state.valueInput4}</p>
			<input value={this.state.valueInput4} onChange={(e)=> this.ubahSTate("valueInput4", e)} />
			<h5>=========================</h5>

			</div>
		)
	}
}
export default Registrasi