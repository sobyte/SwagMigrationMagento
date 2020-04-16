(this.webpackJsonp=this.webpackJsonp||[]).push([["swag-migration-magento"],{"9arN":function(e,a){e.exports='<div class="swag-migration-wizard swag-migration-wizard-page-credentials"\n     @keypress.enter="onKeyPressEnter">\n    {% block swag_migration_magento_wizard_page_credentials_content %}\n        <div class="swag-migration-wizard__content">\n            {% block swag_migration_magento_wizard_page_credentials_information %}\n                <div class="swag-migration-wizard__content-information">\n                    {% block swag_migration_magento_wizard_page_credentials_local_hint %}\n                        {{ $tc(\'swag-migration.wizard.pages.credentials.magento.local.contentInformation\') }}\n                    {% endblock %}\n                </div>\n            {% endblock %}\n\n            {% block swag_migration_magento_wizard_page_credentials_credentials %}\n                <div class="swag-migration-wizard__form">\n                    {% block swag_migration_magento_wizard_page_credentials_local_db_host_port_group %}\n                        <sw-container columns="1fr 80px"\n                                      gap="16px">\n                            {% block swag_migration_magento_wizard_page_credentials_local_dbhost_field %}\n                                <sw-text-field v-autofocus\n                                          name="sw-field--dbHost"\n                                          :label="$tc(\'swag-migration.wizard.pages.credentials.magento.local.dbHostLabel\')"\n                                          :placeholder="$tc(\'swag-migration.wizard.pages.credentials.magento.local.dbHostPlaceholder\')"\n                                          v-model="inputCredentials.dbHost">\n                                </sw-text-field>\n                            {% endblock %}\n\n                            {% block swag_migration_magento_wizard_page_credentials_local_dbport_field %}\n                                <sw-field name="sw-field--dbPort"\n                                          :label="$tc(\'swag-migration.wizard.pages.credentials.magento.local.dbPortLabel\')"\n                                          v-model="inputCredentials.dbPort">\n                                </sw-field>\n                            {% endblock %}\n                        </sw-container>\n                    {% endblock %}\n\n                    {% block swag_migration_magento_wizard_page_credentials_local_dbuser_field %}\n                        <sw-field name="sw-field--dbUser"\n                                  :label="$tc(\'swag-migration.wizard.pages.credentials.magento.local.dbUserLabel\')"\n                                  :placeholder="$tc(\'swag-migration.wizard.pages.credentials.magento.local.dbUserPlaceholder\')"\n                                  v-model="inputCredentials.dbUser">\n                        </sw-field>\n                    {% endblock %}\n\n                    {% block swag_migration_magento_wizard_page_credentials_local_dbpassword_field %}\n                        <sw-field name="sw-field--dbPassword"\n                                  type="password"\n                                  :label="$tc(\'swag-migration.wizard.pages.credentials.magento.local.dbPasswordLabel\')"\n                                  :placeholder="$tc(\'swag-migration.wizard.pages.credentials.magento.local.dbPasswordPlaceholder\')"\n                                  v-model="inputCredentials.dbPassword">\n                        </sw-field>\n                    {% endblock %}\n\n                    {% block swag_migration_magento_wizard_page_credentials_local_dbname_field %}\n                        <sw-field name="sw-field--dbName"\n                                  :label="$tc(\'swag-migration.wizard.pages.credentials.magento.local.dbNameLabel\')"\n                                  :placeholder="$tc(\'swag-migration.wizard.pages.credentials.magento.local.dbNamePlaceholder\')"\n                                  v-model="inputCredentials.dbName">\n                        </sw-field>\n                    {% endblock %}\n\n                    {% block swag_migration_magento_wizard_page_credentials_local_shopurlactive_field %}\n                        <sw-switch-field name="sw-field--shopUrlActive"\n                                :label="$tc(\'swag-migration.wizard.pages.credentials.magento.local.shopUrlActiveLabel\')"\n                                :helpText="$tc(\'swag-migration.wizard.pages.credentials.magento.local.shopUrlActiveHelp\')"\n                                v-model="shopUrlActive">\n                        </sw-switch-field>\n                    {% endblock %}\n\n                    {% block swag_migration_magento_wizard_page_credentials_local_installationroot_field %}\n                        <sw-field v-if="shopUrlActive === false"\n                                  name="sw-field--installationRoot"\n                                  :label="$tc(\'swag-migration.wizard.pages.credentials.magento.local.installationRoot\')"\n                                  :placeholder="$tc(\'swag-migration.wizard.pages.credentials.magento.local.installationRootPlaceholder\')"\n                                  :helpText="$tc(\'swag-migration.wizard.pages.credentials.magento.local.installationRootHelp\')"\n                                  v-model="inputCredentials.installationRoot">\n                        </sw-field>\n                    {% endblock %}\n\n                    {% block swag_migration_magento_wizard_page_credentials_local_shopurl_field %}\n                        <sw-url-field v-if="shopUrlActive === true"\n                                  name="sw-url-field--shopUrl"\n                                  :label="$tc(\'swag-migration.wizard.pages.credentials.magento.local.shopUrl\')"\n                                  :placeholder="$tc(\'swag-migration.wizard.pages.credentials.magento.local.shopUrlPlaceholder\')"\n                                  :helpText="$tc(\'swag-migration.wizard.pages.credentials.magento.local.shopUrlHelp\')"\n                                  v-model="inputCredentials.shopUrl">\n                        </sw-url-field>\n                    {% endblock %}\n\n                    {% block swag_migration_magento_wizard_page_credentials_local_tableprefix_field %}\n                        <sw-field name="sw-field--tablePrefix"\n                                  :label="$tc(\'swag-migration.wizard.pages.credentials.magento.local.tablePrefix\')"\n                                  :placeholder="$tc(\'swag-migration.wizard.pages.credentials.magento.local.tablePrefixPlaceholder\')"\n                                  v-model="inputCredentials.tablePrefix">\n                        </sw-field>\n                    {% endblock %}\n                </div>\n            {% endblock %}\n        </div>\n    {% endblock %}\n</div>\n'},fZVn:function(e,a){const{Component:i}=Shopware;i.extend("swag-migration-profile-magento19-local-credential-form","swag-migration-profile-magento-local-credential-form",{})},jzFd:function(e,a,i){"use strict";i.r(a);var n=i("9arN"),t=i.n(n);const{Component:l}=Shopware;l.register("swag-migration-profile-magento-local-credential-form",{template:t.a,props:{credentials:{type:Object,default:()=>({})}},data:()=>({inputCredentials:{dbHost:"",dbPort:"3306",dbUser:"",dbPassword:"",dbName:"",installationRoot:"",shopUrl:"",tablePrefix:""},shopUrlActive:!1}),watch:{credentials:{immediate:!0,handler(e){null===e||Object.keys(e).length<1?this.emitCredentials(this.inputCredentials):(this.inputCredentials=e,void 0!==this.inputCredentials.shopUrl&&"http://"!==this.inputCredentials.shopUrl&&"https://"!==this.inputCredentials.shopUrl&&""!==this.inputCredentials.shopUrl&&(this.shopUrlActive=!0),this.emitOnChildRouteReadyChanged(this.areCredentialsValid(this.inputCredentials)))}},inputCredentials:{deep:!0,handler(e){this.emitCredentials(e)}},shopUrlActive(e){!0===e?this.inputCredentials.installationRoot="":this.inputCredentials.shopUrl="",this.emitCredentials(this.inputCredentials)}},methods:{areCredentialsValid(e){return this.validateInput(e.dbHost)&&this.validateInput(e.dbPort)&&this.validateInput(e.dbName)&&this.validateInput(e.dbUser)&&this.validateInput(e.dbPassword)&&(!1===this.shopUrlActive&&this.validateInput(e.installationRoot)||!0===this.shopUrlActive&&this.validateShopUrl(e.shopUrl))},validateInput:e=>null!=e&&""!==e,validateShopUrl(e){return void 0!==e&&this.validateInput(e)&&"http://"!==e&&"https://"!==e},emitOnChildRouteReadyChanged(e){this.$emit("onChildRouteReadyChanged",e)},emitCredentials(e){this.$emit("onCredentialsChanged",e),this.emitOnChildRouteReadyChanged(this.areCredentialsValid(e))},onKeyPressEnter(){this.$emit("onTriggerPrimaryClick")}}});i("fZVn")}},[["jzFd","runtime"]]]);