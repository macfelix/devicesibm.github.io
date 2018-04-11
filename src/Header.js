import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      hideClass:""
    };
  }

  showHide(e){
    var x = document.getElementById(e);
    x.classList.toggle("showClass");
  }

  showHideText(e){
    var x = document.getElementById(e);
    x.classList.toggle("showtextCont");
  }

  slideMenuLeft(e){
    this.showHideText("mainMenu-body");
    this.showHideText("mainMenu-footer");
    var x = document.getElementById(e);
    x.classList.toggle("showMenuLeft");
  }

  showSubmenu(a,b){
    var x = document.getElementById(a);
    x.classList.toggle(b);
  }



  render() {
    return (
      <div >
          <nav class="bx--cloud-header">

            <div class="bx--cloud-header__wrapper">
              {/*Menu Button*/}
                <button class="bx--cloud-header__app-menu" type="button" onClick={this.slideMenuLeft.bind(this,"mainMenu")}>
                  <svg fill-rule="evenodd">
                    <title>Devices Team @ IBM</title>
                    <path d="M0 0h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
                  </svg>
                </button>
                {/*Dropdown div*/}
                  <div id="mainMenu" className="mainMenu">
                    <div id="mainMenu-body" className="textCont">

                    {/*Menu Item*/}
                      <div className="mainMenu-MenuItemWrapper">
                        <div className="mainMenu-MenuItem">
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-MenuItemName">
                              <span className="mainMenu-MenuItemName-Span">
                                IT Asset Incident Report
                              </span>
                            </div>
                          </a>
                          <div className="mainMenu-MenuItemDrop" onClick={this.showSubmenu.bind(this,"subMenuIAIR", "showSubmenu3")}>
                            <span>
                              <svg width='12' height='8' viewBox='0 0 12 8' fill-rule='evenodd'>
                                <path fill='white' d='M10.6 0L6 4.7 1.4 0 0 1.4l6 6.1 6-6.1z'></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div id="subMenuIAIR" className="mainMenu-SubMenuItemGroup">
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                        </div>
                      </div>

                    {/*Menu Item*/}
                      <div className="mainMenu-MenuItemWrapper">
                        <div className="mainMenu-MenuItem">
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-MenuItemName">
                              <span className="mainMenu-MenuItemName-Span">
                                Menu 2
                              </span>
                            </div>
                          </a>
                          {/*
                          <div className="mainMenu-MenuItemDrop" onClick={this.showSubmenu.bind(this,"subMenuIAIR2", "showSubmenu2")}>
                            <span>
                              <svg width='12' height='8' viewBox='0 0 12 8' fill-rule='evenodd'>
                                <path fill='white' d='M10.6 0L6 4.7 1.4 0 0 1.4l6 6.1 6-6.1z'></path>
                              </svg>
                            </span>
                          </div>
                          */}
                        </div>
                        <div id="subMenuIAIR2" className="mainMenu-SubMenuItemGroup">
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                        </div>
                      </div>

                    {/*Menu Item*/}
                      <div className="mainMenu-MenuItemWrapper">
                        <div className="mainMenu-MenuItem">
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-MenuItemName">
                              <span className="mainMenu-MenuItemName-Span">
                                Menu 3

                              </span>
                            </div>
                          </a>
                          <div className="mainMenu-MenuItemDrop" onClick={this.showSubmenu.bind(this,"subMenuIAIR3", "showSubmenu1")}>
                            <span>
                              <svg width='12' height='8' viewBox='0 0 12 8' fill-rule='evenodd'>
                                <path fill='white' d='M10.6 0L6 4.7 1.4 0 0 1.4l6 6.1 6-6.1z'></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div id="subMenuIAIR3" className="mainMenu-SubMenuItemGroup">
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                        </div>
                      </div>

                    {/*Menu Item*/}
                      <div className="mainMenu-MenuItemWrapper">
                        <div className="mainMenu-MenuItem">
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-MenuItemName">
                              <span className="mainMenu-MenuItemName-Span">
                                Menu 4
                              </span>
                            </div>
                          </a>
                          <div className="mainMenu-MenuItemDrop" onClick={this.showSubmenu.bind(this,"subMenuIAIR4", "showSubmenu10")}>
                            <span>
                              <svg width='12' height='8' viewBox='0 0 12 8' fill-rule='evenodd'>
                                <path fill='white' d='M10.6 0L6 4.7 1.4 0 0 1.4l6 6.1 6-6.1z'></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div id="subMenuIAIR4" className="mainMenu-SubMenuItemGroup">
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                          <a className="mainMenu-Link" href="">
                            <div className="mainMenu-SubMenuItem">
                              <span className="mainMenu-SubMenuItem-Span">Sub-menu</span>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div id="mainMenuPush"></div>
                    </div>
                    <div id="mainMenu-footer" className="textCont">
                      IBM. Copyright 2018.
                    </div>
                  </div>
              {/*Devices Team @IBM*/}
                <a href="www.google.com" class="bx--cloud-header-brand">
                  <h4 class="bx--cloud-header-brand__text">
                    <span style={{fontSize:16, marginRight:6}}>Devices Team @</span>
                  </h4>
                  <img src="images\IBM-8bar-30pt.svg" style={{height:20, }}></img>
                </a>
            </div>

            <div class="bx--cloud-header__wrapper">
              <ul class="bx--cloud-header-list">
                {/*Inbox*/}
                  <li class="bx--cloud-header-list__item bx--cloud-header-list__item--icon">
                    <button class="bx--cloud-header-list__btn" type="button" onClick={this.showHide.bind(this,'inboxDropDown')}>
                      <svg preserveAspectRatio="xMidYMid meet" viewBox="180.9999999999999 206.79998779296866 34 30.24999999999997" width="30" height="26.25">
                        <path d="M182 234.05L182 207.8L212 207.8L212 234.05L182 234.05ZM196.81 225.3L184.81 214.53L184.81 230.55L209.19 230.55L209.19 214.11L196.85 225.2L196.81 225.3ZM196.77 220.21L206.7 211.3L186.85 211.3L196.77 220.21Z" id="c2NhzrS4F"></path>
                      </svg>
                    </button>
                    {/*Dropdown div*/}
                      <div id="inboxDropDown" className="headerDropDown">
                        <p style={{fontSize:14,lineHeight:1.6}}><span style={{fontSize:10, marginRight:5}}>3/26/18</span><strong> IN0001</strong> Lost Asset <em>[approval required]</em></p>
                        <p style={{fontSize:14,lineHeight:1.6}}><span style={{fontSize:10, marginRight:5}}>3/26/18</span><strong> IN0002</strong> Lost Asset <em>[approval required]</em></p>
                        <p style={{fontSize:14,lineHeight:1.6}}><span style={{fontSize:10, marginRight:5}}>3/26/18</span><strong> IN0003</strong> Lost Asset <em>[approval required]</em></p>
                        <p style={{fontSize:14,lineHeight:1.6}}><span style={{fontSize:10, marginRight:5}}>3/26/18</span><strong> IN0004</strong> Lost Asset <em>[approval required]</em></p>
                        <p style={{fontSize:14,lineHeight:1.6}}><span style={{fontSize:10, marginRight:5}}>3/26/18</span><strong> IN0005</strong> Lost Asset <em>[approval required]</em></p>
                      </div>
                  </li>
                {/*Notification*/}
                  <li class="bx--cloud-header-list__item bx--cloud-header-list__item--icon">
                    <button class="bx--cloud-header-list__btn" type="button" onClick={this.showHide.bind(this,'notificationDropDown')}>
                      <svg viewBox="0 0 16 16">
                        <title>notifications</title>
                        <path d="M9 1.11V0H7v1.11A5.022 5.022 0 0 0 3.1 4.9L1 14h5a2 2 0 0 0 4 0h5l-2.1-9.1A5.022 5.022 0 0 0 9 1.11z" />
                      </svg>
                    </button>
                    {/*Dropdown div*/}
                      <div id="notificationDropDown" className="headerDropDown">
                        <p>hello</p>
                      </div>
                  </li>
                {/*Alert*/}
                  <li class="bx--cloud-header-list__item bx--cloud-header-list__item--icon">
                    <button class="bx--cloud-header-list__btn" type="button" onClick={this.showHide.bind(this,'alertDropDown')}>
                      <svg width='16' height='16' viewBox='0 0 16 16' fill-rule='evenodd'><path d='M8 1L0 15h16L8 1zm-.8 5h1.5v1.4L8.3 11h-.8l-.4-3.6V6h.1zm.8 8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z'></path></svg>
                    </button>
                    {/*Dropdown div*/}
                      <div id="alertDropDown" className="headerDropDown">
                        <p>hello</p>
                      </div>
                  </li>
                {/*Profile*/}
                  <li class="bx--cloud-header-list__item bx--cloud-header-list__item--icon">
                    <button class="bx--cloud-header-list__btn" type="button" onClick={this.showHide.bind(this,'profileDropDown')}>
                      <svg class="bx--cloud-header__user-icon" viewBox="0 0 24 24">
                        <title>user</title>
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 4.6c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm7 14.5c-1.8 1.8-4.3 2.9-7 2.9s-5.2-1.1-7-2.9v-1.6c0-1.3.7-2 2-2h10c1.3 0 2 .7 2 2v1.6z"
                        />
                      </svg>
                    </button>
                    {/*Dropdown div*/}
                      <div id="profileDropDown" className="headerDropProfile">
                        <div style={{position:"relative", minHeight:80, backgroundColor:""}}>
                          <div style={{display:"inline-block", position:"relative", height:80, width:80, backgroundColor:"", padding:10, marginLeft:110, marginRight:110}}>
                            <svg style={{display:"inline-block", position:"relative", height:"100%"}} viewBox="0 0 24 24">
                              <path fill="white" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 4.6c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm7 14.5c-1.8 1.8-4.3 2.9-7 2.9s-5.2-1.1-7-2.9v-1.6c0-1.3.7-2 2-2h10c1.3 0 2 .7 2 2v1.6z"/>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div style={{display:"inline-block", position:"relative", width:"100%", minHeight:40, backgroundColor:"", fontSize:18, fontWeight:400, textAlign:"center", lineHeight:"40px"}}>
                            Edgar Francis A. Felix
                          </div>
                          <div style={{display:"inline-block", position:"relative", width:"100%", minHeight:20, backgroundColor:"", fontSize:14, fontWeight:300, textAlign:"center", lineHeight:"20px"}}>
                            Software Developer
                          </div>
                          <div style={{display:"inline-block", position:"relative", width:"100%", minHeight:40, backgroundColor:"", textAlign:"center"}}>
                          <br/>
                          </div>
                          <a className="mainMenu-Link" href="">
                            <div style={{display:"inline-block", position:"relative", width:"50%", minHeight:40, backgroundColor:"", textAlign:"center", fontSize:12, fontWeight:600, lineHeight:"40px"}}>
                              Preferences
                            </div>
                          </a>
                          <a className="mainMenu-Link" href="">
                            <div style={{display:"inline-block", position:"relative", width:"50%", minHeight:40, backgroundColor:"", textAlign:"center", fontSize:12, fontWeight:600, lineHeight:"40px"}}>
                              Logout
                            </div>
                          </a>
                        </div>
                      </div>
                  </li>
              </ul>
            </div>

          </nav>
      </div>
    );
  }
}

export default Header;


