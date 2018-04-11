import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="bx--grid">
        <div className="bx--row">

          <div className="bx--col-xs-12 bx--col-md-6 bx--col-xl-4 bx--col-xxl-3">
            <div className="bx--tile" style={{padding:20, marginTop:10, marginBottom:10}}>
              <p style={{fontWeight:300}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sodales orci, finibus posuere mauris. Quisque accumsan, augue non sagittis condimentum, magna lorem lacinia velit, eget sollicitudin purus magna a velit. Sed sed lacus consectetur, tempor mauris non, porttitor ligula. Donec quis consectetur nisl. Nam eu velit eget sapien varius congue vitae in dolor. Sed aliquet tellus nulla, at pulvinar nisl fermentum ac. Cras eros massa, molestie non tempor at, pharetra et quam. Etiam bibendum sagittis sollicitudin. Donec dictum, est ut tincidunt mollis, metus augue suscipit nisl, non feugiat nulla eros vitae dolor. Aliquam ullamcorper elit a sagittis venenatis. Vestibulum et nisi ligula. Quisque imperdiet nisl ut nisl posuere, a varius nunc tincidunt. Morbi vitae libero at erat efficitur eleifend quis eu felis. Donec eget ligula ut turpis malesuada vulputate. In mattis sapien mauris, id rutrum massa placerat ac.</p>
            </div>
          </div>
          
          <div className="bx--col-xs-12 bx--col-md-6 bx--col-xl-4 bx--col-xxl-3" >
            <div className="bx--tile" style={{padding:20, marginTop:10, marginBottom:10}}>
              <p style={{fontWeight:400}}>Maecenas felis odio, cursus at fringilla facilisis, vestibulum vel felis. Fusce et augue eget lorem vestibulum dictum. Fusce auctor tellus nec enim hendrerit euismod. Aliquam fringilla erat quis tellus tristique pharetra. Fusce metus ligula, consectetur ut felis non, luctus venenatis leo. Pellentesque augue justo, gravida vitae vestibulum vel, malesuada in libero. Etiam imperdiet vel sem vel pulvinar. Pellentesque iaculis commodo magna, in aliquam est euismod at. Donec vitae odio odio. Suspendisse a imperdiet felis. In maximus commodo purus, vitae feugiat nunc tincidunt id. Nullam vel eros in purus tincidunt rutrum. Sed vitae nunc interdum, aliquet leo a, eleifend ex.</p>
            </div>
          </div>
          
          <div className="bx--col-xs-12 bx--col-md-6 bx--col-xl-4 bx--col-xxl-3" >
            <div className="bx--tile" style={{padding:20, marginTop:10, marginBottom:10}}>
              <p style={{fontWeight:600}}>Etiam rhoncus porttitor lorem, sit amet pretium leo sollicitudin quis. Donec eget libero ut felis suscipit cursus. Morbi ut orci ut ligula consectetur consequat ut vel nisl. Nulla vulputate ullamcorper mattis. Nunc ornare ultrices ipsum, at rutrum diam. Proin id volutpat diam. Proin viverra mauris tortor, vitae hendrerit ex venenatis at. Integer sit amet augue maximus sem molestie maximus in eu elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ullamcorper luctus lacinia.</p>
            </div>
          </div>
          
          <div className="bx--col-xs-12 bx--col-md-6 bx--col-xl-4 bx--col-xxl-3" >
            <div className="bx--tile" style={{padding:20, marginTop:10, marginBottom:10}}>
              <p>Nulla semper aliquam metus vel malesuada. In a hendrerit elit. Nullam interdum auctor varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Duis mattis aliquet metus vitae placerat. Suspendisse interdum diam metus, vestibulum tincidunt ex consectetur eu. In lobortis condimentum vehicula.</p>
            </div>
          </div>
          
        {/*Module with Accordion*/}
          <div className="bx--col-xs-12 bx--col-md-6 bx--col-xl-4 bx--col-xxl-3" >
            <div className="bx--tile" style={{padding:20, marginTop:10, marginBottom:10}}>
              <p style={{fontWeight:400}}>
                <ul data-accordion className="bx--accordion">
                  <li data-accordion-item className="bx--accordion__item">
                    <button className="bx--accordion__heading" aria-expanded="false" aria-controls="pane1">
                      <svg className="bx--accordion__arrow" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
                        <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
                      </svg>
                      <p className="bx--accordion__title">Employee Details </p>
                    </button>
                    <div id="pane1" className="bx--accordion__content">
                      <p>Integer mattis, nisi in efficitur vestibulum, tortor enim sagittis diam, ac dignissim nulla dolor vitae libero. Vivamus tellus sapien, rhoncus in nisi vitae, luctus convallis nisl. Etiam ante ligula, faucibus ac pretium quis, fringilla vitae nunc. Donec euismod lorem in ultricies vestibulum. Praesent sagittis massa diam, at viverra diam finibus vel. Morbi bibendum pharetra dolor, eleifend vestibulum metus mattis ac. Pellentesque rutrum lectus sit amet est fringilla, et feugiat ante pharetra. Proin vehicula, arcu et ullamcorper mollis, augue mi tincidunt lacus, sed efficitur urna erat ut libero. Aenean id odio quis est laoreet facilisis sit amet ac turpis. </p>
                    </div>
                  </li>
                </ul>
              </p>
            </div>
          </div>
          

        </div>
      </div>
    );
  }
}

export default Content;


