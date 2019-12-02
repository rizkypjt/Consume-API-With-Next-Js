// import React, { Component } from "react";
// import {
//   ComposableMap,
//   ZoomableGroup,
//   Geographies,
//   Geography,
//   Markers,
//   Marker
// } from "react-simple-maps";
// import ReactTooltip from "react-tooltip";
// import Router from "next/router";

// const getRandomArbitrary = (min, max) =>
//   Math.ceil(Math.random() * (max - min) + min);

// const wrapperStyles = {
//   // width: "100%",
//   // maxWidth: 980,
//   margin: "0 auto"
// };

// const DB = require("../db.json");

// const IDN_CENTER = [118.1597563103809, -2.6461639416785254];
// const PROVINCES = require("../static/indonesia.json").objects.states_provinces
//   .geometries;

// const rand = getRandomArbitrary(0, 100);
// const INITIAL_STATE = {
//   center: IDN_CENTER,
//   zoneId: "all",
//   zoom: 1,
//   title: "All",
//   upHosts: rand,
//   downHosts: 100 - rand,
//   totalHosts: getRandomArbitrary(1, 10000)
// };

// class ExcludeIncludeGeographies extends Component {
//   handleMoveStart(currentCenter) {
//     console.log("New center: ", currentCenter);
//   }

//   handleMoveEnd(newCenter) {
//     console.log("New center: ", newCenter);
//   }

//   handleClick(geography, evt) {
//     console.log("Geography data: ", geography);
//   }

//   handleCitySelection = (name, coord, data) => evt => {
//     if (this.state.zoom > 1) {
//       // TODO: NAVIGATE TO DETAIL
//       Router.push(`/remote/${data.id}`);
//     } else {
//       this.setState({
//         center: coord,
//         zoom: 5,
//         title: name,
//         upHosts: getRandomArbitrary(0, 100),
//         downHosts: getRandomArbitrary(0, 100),
//         totalHosts: getRandomArbitrary(1, 10000)
//       });
//     }
//   };

//   handleReset = () => {
//     this.setState(INITIAL_STATE);
//   };

//   _handleZoomIn = () => {
//     this.setState(prev => ({ ...prev, zoom: prev.zoom + 1 }));
//   };

//   _handleZoomOut = () => {
//     this.setState(prev => ({ ...prev, zoom: Math.max(prev.zoom - 1, 1) }));
//   };

//   _handleZone = e => {
//     this.setState({ zoneId: e.target.value });
//   };

//   constructor(props) {
//     super(props);

//     this.state = INITIAL_STATE;
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       ReactTooltip.rebuild();
//     }, 100);
//   }

//   _handleDataTooltip = data => {
//     if (process.browser) {
//       ReactTooltip.rebuild();
//     }

//     const _data = JSON.parse(data);

//     return _data && `${_data.ip_bri}`;

//     // return (
//     //   _data && (
//     //     <>
//     //       <p>
//     //         <strong>ID</strong>
//     //         <br />
//     //         <span>{_data.id}</span>
//     //       </p>
//     //       <p>
//     //         <strong>No SPK</strong>
//     //         <br />
//     //         <span>{_data.nomor_spk}</span>
//     //       </p>
//     //       <p>
//     //         <strong>IP BRI</strong>
//     //         <br />
//     //         <span>{_data.ip_bri}</span>
//     //       </p>
//     //     </>
//     //   )
//     // );
//   };

//   render() {
//     return (
//       <>
//         <div className="col-md-12">
//           <div className="box">
//             {/* <div className="box-tools pull-right">
//               <button
//                 type="button"
//                 className="btn btn-box-tool"
//                 onClick={this._handleZoomOut}
//               >
//                 <i className="fa fa-search-minus"></i>
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-box-tool"
//                 onClick={this._handleZoomIn}
//               >
//                 <i className="fa fa-search-plus"></i>
//               </button>
//             </div> */}
//             <div className="box-header">
//               <h3 className="box-title">{this.state.title}</h3>
//             </div>
//             {/*  */}
//             <div>
//               <div className="col-md-6">
//                 {this.props.zones && (
//                   <div className="form-group">
//                     <select
//                       className="form-control"
//                       onChange={this._handleZone}
//                       value={this.state.zoneId}
//                     >
//                       {this.props.zones.map(item => (
//                         <option key={item.id} value={item.id}>
//                           {item.nama}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 )}
//               </div>
//               <div className="col-md-6">
//                 <div className="btn-group pull-right">
//                   <button
//                     type="button"
//                     className="btn btn-default"
//                     onClick={this._handleZoomOut}
//                   >
//                     <i className="fa fa-search-minus"></i>
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-default"
//                     onClick={this._handleZoomIn}
//                   >
//                     <i className="fa fa-search-plus"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/*  */}
//             <div className="box-body">
//               <ComposableMap
//                 projectionConfig={{ scale: 1800 }}
//                 width={1200}
//                 height={529}
//                 style={{
//                   width: "100%",
//                   height: "auto"
//                 }}
//               >
//                 <ZoomableGroup
//                   center={this.state.center}
//                   zoom={this.state.zoom}
//                   onMoveStart={this.handleMoveStart}
//                   onMoveEnd={this.handleMoveEnd}
//                   disablePanning={this.state.zoom === 1}
//                 >
//                   <Geographies geography="/static/indonesia.json">
//                     {(geographies, projection) =>
//                       geographies.map((geography, i) => (
//                         <Geography
//                           key={i}
//                           geography={geography}
//                           projection={projection}
//                           onClick={this.handleClick}
//                           // data-tip={
//                           //   geography.properties.name
//                           //     ? geography.properties.name
//                           //     : ""
//                           // }
//                           style={{
//                             default: {
//                               fill: "#ECEFF1",
//                               stroke: "#607D8B",
//                               strokeWidth: 0.75,
//                               outline: "none"
//                             },
//                             hover: {
//                               fill: "#CFD8DC",
//                               stroke: "#607D8B",
//                               strokeWidth: 0.75,
//                               outline: "none"
//                             },
//                             pressed: {
//                               fill: "#FF5722",
//                               stroke: "#607D8B",
//                               strokeWidth: 0.75,
//                               outline: "none"
//                             }
//                           }}
//                         />
//                       ))
//                     }
//                   </Geographies>
//                   <Markers>
//                     {DB.raws
//                       // .slice(0, 60)
//                       .map((data, i) => {
//                         // const { name, longitude, latitude } = properties;
//                         const {
//                           id,
//                           ip_bri,
//                           pemilik,
//                           longitude,
//                           latitude,
//                           jaringan_komunikasi,
//                           nomor_spk,
//                           zona
//                         } = data;

//                         return (
//                           i % 200 === 0 && (
//                             <Marker
//                               key={i}
//                               marker={{
//                                 id,
//                                 coordinates: [longitude, latitude]
//                               }}
//                               onClick={this.handleCitySelection(
//                                 `${nomor_spk} (${zona})`,
//                                 [longitude, latitude],
//                                 data
//                               )}
//                             >
//                               <circle
//                                 data-tip={`${ip_bri} - ${pemilik}`}
//                                 cx={0}
//                                 cy={0}
//                                 r={6 + this.state.zoom * 0.5}
//                                 // fill={
//                                 //   Math.ceil(Math.random() * 100) % 2 === 0
//                                 //     ? "red"
//                                 //     : "green"
//                                 // }
//                                 fill={
//                                   jaringan_komunikasi === "MPLS"
//                                     ? "blue"
//                                     : "orange"
//                                 }
//                                 stroke="#fff"
//                               />
//                             </Marker>
//                           )
//                         );
//                       })}
//                   </Markers>
//                   {/* <Markers>
//                     {PROVINCES.map(({ properties }, i) => {
//                       const { name, longitude, latitude } = properties;

//                       return (
//                         <Marker
//                           key={i}
//                           marker={{ name, coordinates: [longitude, latitude] }}
//                           onClick={this.handleCitySelection(
//                             `${name} (Zona ${getRandomArbitrary(0, 5)})`,
//                             [longitude, latitude]
//                           )}
//                         >
//                           <circle
//                             data-tip={name}
//                             cx={0}
//                             cy={0}
//                             r={6}
//                             fill={
//                               Math.ceil(Math.random() * 100) % 2 === 0
//                                 ? "red"
//                                 : "green"
//                             }
//                             stroke="#fff"
//                           />
//                         </Marker>
//                       );
//                     })}
//                   </Markers> */}
//                 </ZoomableGroup>
//               </ComposableMap>
//               <ReactTooltip />
//             </div>
//             {this.state.zoom !== 1 && (
//               <div className="box-footer clearfix">
//                 <button
//                   type="button"
//                   className="btn btn-danger pull-right"
//                   onClick={this.handleReset}
//                 >
//                   <i className="fa fa-search-minus"></i> Reset Zoom
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* <div className="col-md-3">
//           <div className="small-box bg-green">
//             <div className="inner">
//               <h3>
//                 {this.state.upHosts}
//                 <sup style={{ fontSize: 20 }}>%</sup>
//               </h3>
//               <p>Available Hosts</p>
//             </div>
//             <div className="icon">
//               <i className="fa fa-arrow-up"></i>
//             </div>
//             <a href="#" className="small-box-footer">
//               More info <i className="fa fa-arrow-circle-right"></i>
//             </a>
//           </div>
//           <div className="small-box bg-red">
//             <div className="inner">
//               <h3>
//                 {this.state.downHosts}
//                 <sup style={{ fontSize: 20 }}>%</sup>
//               </h3>

//               <p>Unavailable Hosts</p>
//             </div>
//             <div className="icon">
//               <i className="fa fa-arrow-down"></i>
//             </div>
//             <a href="#" className="small-box-footer">
//               More info <i className="fa fa-arrow-circle-right"></i>
//             </a>
//           </div>
//           <div className="small-box bg-blue">
//             <div className="inner">
//               <h3>{this.state.totalHosts}</h3>

//               <p>Total Hosts</p>
//             </div>
//             <div className="icon">
//               <i className="fa fa-server"></i>
//             </div>
//             <a href="#" className="small-box-footer">
//               More info <i className="fa fa-arrow-circle-right"></i>
//             </a>
//           </div>
//         </div> */}
//       </>
//     );
//   }
// }

// export default ExcludeIncludeGeographies;
