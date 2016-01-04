import React from 'react'

class FormInput extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    let {handleSubmit} = this.props
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(this.refs.camera.value,this.refs.earth_date_year.value+'-'+this.refs.earth_date_day.value+'-'+this.refs.earth_date_month.value);
      }}>
        <select ref="camera" id="camera">
          <option value="FHAZ">Front Hazard Avoidance Camera</option>
          <option value="RHAZ">Rear Hazard Avoidance Camera</option>
          <option value="MAST">Mast Camera</option>
          <option value="CHEMCAM">Chemistry and Camera Complex</option>
          <option value="MAHLI">Mars Hand Lens Imager</option>
          <option value="MARDI">Mars Descent Imager</option>
          <option value="NAVCAM">Navigation Camera</option>
          <option value="PANCAM">Panoramic Camera</option>
          <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
        </select>
        <select className="large-4" ref="earth_date_month">
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select className="large-4" ref="earth_date_day">
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <select className="large-4" ref="earth_date_year">
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </select>
        <input type="submit" className="button small-12" name="name" value="Search" />
      </form>
    )
  }
}

export default FormInput
