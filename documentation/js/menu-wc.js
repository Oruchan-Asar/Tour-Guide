'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tour-guide documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GuideModule.html" data-type="entity-link" >GuideModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GuideModule-e7abfe641f7111a9c02b72b378aa1d19be0a3abdbcafd420ed13a4ab4b21e485a375c7f54a3ad3f237cb22bc4d3bc4a1f44d96c43159ff7c6941f608a84d7f14"' : 'data-target="#xs-controllers-links-module-GuideModule-e7abfe641f7111a9c02b72b378aa1d19be0a3abdbcafd420ed13a4ab4b21e485a375c7f54a3ad3f237cb22bc4d3bc4a1f44d96c43159ff7c6941f608a84d7f14"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GuideModule-e7abfe641f7111a9c02b72b378aa1d19be0a3abdbcafd420ed13a4ab4b21e485a375c7f54a3ad3f237cb22bc4d3bc4a1f44d96c43159ff7c6941f608a84d7f14"' :
                                            'id="xs-controllers-links-module-GuideModule-e7abfe641f7111a9c02b72b378aa1d19be0a3abdbcafd420ed13a4ab4b21e485a375c7f54a3ad3f237cb22bc4d3bc4a1f44d96c43159ff7c6941f608a84d7f14"' }>
                                            <li class="link">
                                                <a href="controllers/GuideController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuideController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GuideModule-e7abfe641f7111a9c02b72b378aa1d19be0a3abdbcafd420ed13a4ab4b21e485a375c7f54a3ad3f237cb22bc4d3bc4a1f44d96c43159ff7c6941f608a84d7f14"' : 'data-target="#xs-injectables-links-module-GuideModule-e7abfe641f7111a9c02b72b378aa1d19be0a3abdbcafd420ed13a4ab4b21e485a375c7f54a3ad3f237cb22bc4d3bc4a1f44d96c43159ff7c6941f608a84d7f14"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GuideModule-e7abfe641f7111a9c02b72b378aa1d19be0a3abdbcafd420ed13a4ab4b21e485a375c7f54a3ad3f237cb22bc4d3bc4a1f44d96c43159ff7c6941f608a84d7f14"' :
                                        'id="xs-injectables-links-module-GuideModule-e7abfe641f7111a9c02b72b378aa1d19be0a3abdbcafd420ed13a4ab4b21e485a375c7f54a3ad3f237cb22bc4d3bc4a1f44d96c43159ff7c6941f608a84d7f14"' }>
                                        <li class="link">
                                            <a href="injectables/GuideService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuideService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TravelerModule.html" data-type="entity-link" >TravelerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TravelerModule-dec09d61f4911e418b6151be0533f100d6bbe7817c4d85b43013c88591c94fadbb93c45ccf89433fb1a5f10fa4395b05b6662719825d36c7d6f685283d08803b"' : 'data-target="#xs-controllers-links-module-TravelerModule-dec09d61f4911e418b6151be0533f100d6bbe7817c4d85b43013c88591c94fadbb93c45ccf89433fb1a5f10fa4395b05b6662719825d36c7d6f685283d08803b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TravelerModule-dec09d61f4911e418b6151be0533f100d6bbe7817c4d85b43013c88591c94fadbb93c45ccf89433fb1a5f10fa4395b05b6662719825d36c7d6f685283d08803b"' :
                                            'id="xs-controllers-links-module-TravelerModule-dec09d61f4911e418b6151be0533f100d6bbe7817c4d85b43013c88591c94fadbb93c45ccf89433fb1a5f10fa4395b05b6662719825d36c7d6f685283d08803b"' }>
                                            <li class="link">
                                                <a href="controllers/TravelerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TravelerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TravelerModule-dec09d61f4911e418b6151be0533f100d6bbe7817c4d85b43013c88591c94fadbb93c45ccf89433fb1a5f10fa4395b05b6662719825d36c7d6f685283d08803b"' : 'data-target="#xs-injectables-links-module-TravelerModule-dec09d61f4911e418b6151be0533f100d6bbe7817c4d85b43013c88591c94fadbb93c45ccf89433fb1a5f10fa4395b05b6662719825d36c7d6f685283d08803b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TravelerModule-dec09d61f4911e418b6151be0533f100d6bbe7817c4d85b43013c88591c94fadbb93c45ccf89433fb1a5f10fa4395b05b6662719825d36c7d6f685283d08803b"' :
                                        'id="xs-injectables-links-module-TravelerModule-dec09d61f4911e418b6151be0533f100d6bbe7817c4d85b43013c88591c94fadbb93c45ccf89433fb1a5f10fa4395b05b6662719825d36c7d6f685283d08803b"' }>
                                        <li class="link">
                                            <a href="injectables/TravelerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TravelerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/GuideController.html" data-type="entity-link" >GuideController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TravelerController.html" data-type="entity-link" >TravelerController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateGuideDto.html" data-type="entity-link" >CreateGuideDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindGuideResponseDto.html" data-type="entity-link" >FindGuideResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GuideResponseDto.html" data-type="entity-link" >GuideResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGuideDto.html" data-type="entity-link" >UpdateGuideDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GuideService.html" data-type="entity-link" >GuideService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TravelerService.html" data-type="entity-link" >TravelerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidGuideMiddleware.html" data-type="entity-link" >ValidGuideMiddleware</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Guide.html" data-type="entity-link" >Guide</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Traveler.html" data-type="entity-link" >Traveler</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});