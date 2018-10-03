import React from 'react';

import '../css/style_sample.scss';

export class Style extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <div className="system-header">
                        <div className="container">
                            <h1 className="system-chapter-title">Typography<span> - Basic</span></h1>
                            <p>Typography 관련 가이드 중 기본적인 Body Text의 기준 사이즈와 행간, 헤드라인 텍스트의 설정</p>
                        </div>
                    </div>
                    <div className="container">
                        <figure className="system-figure-wrap back-gray">
                            <img src={require('../img/design_guide/typography_size_base.png')} alt=""/>
                            
                        </figure>
                        <p>
                            브라우저의 기본 폰트 사이즈 16px을 1rem으로 기준으로 한다. 0.25rem : 4px를 최소 단위로 삼는다.
                            기본 line-height: 1.75em. 페이지 전체 레이아웃에서 요소들 사이의 가로 여백과 요소들이 갖는 높이가 조화되기 위해서
                            가장 기초적인 방법은 기본 폰트사이즈와 line-height를 기반으로 한 Row Grid를 설정하는 것이다.
                            <br />
                            <a href="https://material.io/design/layout/understanding-layout.html#usage" target="_blank">
                                Google Material Design Layout 참조
                            </a>
                        </p>
                        

                        <hr className="chapter-sub-hr"/>
                        <h4 className="system-chapter-subtitle">Headline<span> - Basic</span></h4>
                        <h1>h1: 헤드라인 타이틀 Headline Title</h1>
                        <h2>h2: 헤드라인 타이틀 Headline Title</h2>
                        <h3>h3: 헤드라인 타이틀 Headline Title</h3>
                        <h4>h4: 헤드라인 타이틀 Headline Title</h4>
                        <h5>h5: 헤드라인 타이틀 Headline Title</h5>
                        <h6>h6: 헤드라인 타이틀 Headline Title</h6>
                        <hr className="chapter-sub-hr"/>
                        <h4 className="system-chapter-subtitle">Paragraph Text<span> - Basic</span></h4>
                        <div className="row">
                            <div className="col-sm-4">
                                <h6>Paragraph text - Default</h6>
                                <p>
                                악보에 나와 있는 음표와 마찬가지로, 글꼴 크기에 대한 적당한 비례감을 지켜야 합니다. 적당한 비례감은 부드럽고, 
                                문서의 위계를 나타내는 시각단서가 될 수도 있고, 규칙에 따른 율동감을 주기 때문입니다. 처음 이것에 대해 다소 
                                위압적이고 딱딱해 지루했었지만, 운이 좋게 몇몇의 용자들이 우리들을 위해 대신 수년간 연구했습니다.
                                </p>
                                <div className="spec-info-wrap">
                                    <div className="table-row">                                        
                                        <div className="table-cell">font-size</div>
                                        <div className="table-cell">1rem (16px)</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">line-height</div>
                                        <div className="table-cell">1.75em (28px)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <h6>Paragraph text - Small</h6>
                                <p className="small">
                                악보에 나와 있는 음표와 마찬가지로, 글꼴 크기에 대한 적당한 비례감을 지켜야 합니다. 적당한 비례감은 부드럽고, 
                                문서의 위계를 나타내는 시각단서가 될 수도 있고, 규칙에 따른 율동감을 주기 때문입니다. 처음 이것에 대해 다소 
                                위압적이고 딱딱해 지루했었지만, 운이 좋게 몇몇의 용자들이 우리들을 위해 대신 수년간 연구했습니다.
                                </p>
                                <div className="spec-info-wrap">
                                    <div className="table-row">                                        
                                        <div className="table-cell">font-size</div>
                                        <div className="table-cell">0.875rem (14px)</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">line-height</div>
                                        <div className="table-cell">1.75em (24.5px)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <h6>Paragraph text - Tiny</h6>
                                <p className="tiny">
                                악보에 나와 있는 음표와 마찬가지로, 글꼴 크기에 대한 적당한 비례감을 지켜야 합니다. 적당한 비례감은 부드럽고, 
                                문서의 위계를 나타내는 시각단서가 될 수도 있고, 규칙에 따른 율동감을 주기 때문입니다. 처음 이것에 대해 다소 
                                위압적이고 딱딱해 지루했었지만, 운이 좋게 몇몇의 용자들이 우리들을 위해 대신 수년간 연구했습니다.
                                </p>
                                <div className="spec-info-wrap">
                                    <div className="table-row">                                        
                                        <div className="table-cell">font-size</div>
                                        <div className="table-cell">0.75rem (12px)</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">line-height</div>
                                        <div className="table-cell">1.75em (21px)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="chapter-sub-hr"/>
                        <h1>Style</h1>
                        <div className="row">
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                        </div>
                    </div>                    
                </div>             
            </div>
        );
    }
}

export default Style;
