 
              if(typeof(dartRichmediaCreatives) == "undefined") {
                dartRichmediaCreatives = new Array();
              }
              function PlacementCreative_1352137484959(creative) {
                for(var property in creative) {
                  this[property] = creative[property];
                }
                this.getAsset = function(type) {
                    return this.assets[type];
                }
                this.macrosInExits = new Object();
                  this.macrosInExits["%eenv!"] = "eenv";
                  this.macrosInExits["%s"] = "s";
                  this.macrosInExits["%eaid!"] = "eaid";
                  this.macrosInExits["%n"] = "n";
                  this.macrosInExits["%m"] = "m";
                  this.macrosInExits["%erid!"] = "erid";
                  this.macrosInExits["%ebuy!"] = "ebuy";
                  this.macrosInExits["%ecid!"] = "ecid";
                  this.macrosInExits["%erv!"] = "erv";
                  this.macrosInExits["%epid!"] = "epid";
                  this.macrosInExits["%eadv!"] = "eadv";
                  this.macrosInExits["%esid!"] = "esid";
                  this.macrosInExits["%ekid!"] = "ekid";
                this.replaceMacros = function(url, creative) {
                  for(var macro in this.macrosInExits) {
                    if(url.indexOf(macro) != -1) {
                      var value = creative["macro_" + this.macrosInExits[macro]];
                      url = url.replace(new RegExp(macro, "g"), value);
                    }
                  }
                  return url;
                }
                this.fullScreenEnabled = false;
                this.requiredPlayerVersion = creative.requiredFlashPlayerVersion;
                this.asVersion = 1;
                this.assets = new Object();
                this.exitEvents = new Object();
                this.timerEvents = new Object();
                this.counterEvents = new Object();
                this.standardEvents = new Object();
                this.standardEvents["EVENT_VIDEO_UNMUTE"] = {
                  reportingId: "21"
                };
                this.standardEvents["EVENT_VIDEO_COMPLETE"] = {
                  reportingId: "13"
                };
                this.standardEvents["EVENT_VIDEO_PAUSE"] = {
                  reportingId: "15"
                };
                this.standardEvents["DISPLAY_TIMER"] = {
                  reportingId: "2"
                };
                this.standardEvents["FULL_SCREEN_VIDEO_PLAYS"] = {
                  reportingId: "5"
                };
                this.standardEvents["BACKUP_IMAGE_IMPRESSION"] = {
                  reportingId: "9"
                };
                this.standardEvents["EVENT_VIDEO_STOP"] = {
                  reportingId: "20"
                };
                this.standardEvents["EVENT_VIDEO_MUTE"] = {
                  reportingId: "16"
                };
                this.standardEvents["EVENT_VIDEO_INTERACTION"] = {
                  reportingId: "14"
                };
                this.standardEvents["EVENT_VIDEO_MIDPOINT"] = {
                  reportingId: "18"
                };
                this.standardEvents["EVENT_USER_INTERACTION"] = {
                  reportingId: "4"
                };
                this.standardEvents["FULL_SCREEN_AVERAGE_VIEW_TIME"] = {
                  reportingId: "7"
                };
                this.standardEvents["DYNAMIC_CREATIVE_IMPRESSION"] = {
                  reportingId: "23"
                };
                this.standardEvents["EVENT_VIDEO_REPLAY"] = {
                  reportingId: "17"
                };
                this.standardEvents["EVENT_FULLSCREEN"] = {
                  reportingId: "22"
                };
                this.standardEvents["EVENT_MANUAL_CLOSE"] = {
                  reportingId: "8"
                };
                this.standardEvents["INTERACTION_TIMER"] = {
                  reportingId: "3"
                };
                this.standardEvents["EVENT_VIDEO_PLAY"] = {
                  reportingId: "11"
                };
                this.standardEvents["FULL_SCREEN_VIDEO_COMPLETES"] = {
                  reportingId: "6"
                };
                this.standardEvents["HTML5_CREATIVE_IMPRESSION"] = {
                  reportingId: "25"
                };
                this.standardEvents["EXPAND_TIMER"] = {
                  reportingId: "10"
                };
                this.standardEvents["FULL_SCREEN_VIDEO"] = {
                  reportingId: "19"
                };
                this.standardEvents["EVENT_VIDEO_VIEW_TIMER"] = {
                  reportingId: "12"
                };
                this.exitEvents["IBML012_Background"] = {
                    reportingId: 565610,
                    url: this.replaceMacros("http://www.ibm.com/marketing/br/smarterplanet/mm/", creative),
                    customizedWindow: false,
                    windowFeatures: "width=-1,height=-1,top=0,left=0,location=yes,menubar=yes,status=yes,toolbar=yes,scrollbars=yes",
                    targetWindow: "_blank"
                };
                this.exitEvents["IBML012_Clique aqua e vela"] = {
                    reportingId: 565611,
                    url: this.replaceMacros("http://www.ibm.com/marketing/br/smarterplanet/mm/", creative),
                    customizedWindow: false,
                    windowFeatures: "width=-1,height=-1,top=0,left=0,location=yes,menubar=yes,status=yes,toolbar=yes,scrollbars=yes",
                    targetWindow: "_blank"
                };
                this.counterEvents["IBML012_replay"] = {
                    reportingId: 565613,
                    sourceComponentName: "",
                    sourceStandardEventId: "-1"
                };
                this.counterEvents["IBML012_Clique aqua e use as setas"] = {
                    reportingId: 565612,
                    sourceComponentName: "",
                    sourceStandardEventId: "-1"
                };
                var exitKeyvalues = "";
                var delimiter = "{DELIM}";
                for(var exitName in this.exitEvents) {
                  if (!core.isPartOfArrayPrototype(exitName)) {
                    var exit = this.exitEvents[exitName];
                    var value = "name:" + escape(exitName) + "," + "url:" + escape(exit.url) + ","
                                + "target:" + (exit.customizedWindow ? "popup" : escape(exit.targetWindow));
                    
                    
                    exitKeyvalues += ((this.asVersion > 1) ? value : escape(value)) + delimiter;
                  }
                }
                exitKeyvalues = exitKeyvalues.substring(0, exitKeyvalues.length - delimiter.length);
                this.videoComponents = new Object();
                this.isAbsoluteUrl = function(url) {
                  return (url.indexOf("http:") == 0 || url.indexOf("rtmp:") == 0);
                }
                this.childAssets = new Object();
                  this.childAssets["IBML012_MidMarketQ2_728x90_inp.swf"] = {
                    isHostedByCdn: false,
                    cdnName: "PID_1623043_IBML012_MidMarketQ2_728x90_inp.swf",
                    isVideo: false,
                    streamingUrl: "",
                    progressiveUrl: "",
                    securedProgressiveUrl: ""
                  }
                this.assetsKeyValues = "";
                for(var assetName in this.childAssets) {
                  if (!core.isPartOfArrayPrototype(assetName)) {
                    var asset = this.childAssets[assetName];
                    if(!asset.isHostedByCdn) {
                      var fileUrl = creative.mediaServer + "/2516595/" + asset.cdnName;
                      this.assetsKeyValues += escape(assetName) + "=" + escape(fileUrl) + "&";
                    } else if(asset.isVideo) {
                      this.assetsKeyValues += escape("STR_" + assetName) + "=" + escape(asset.streamingUrl) + "&";
                      this.assetsKeyValues += escape("PRO_" + assetName) + "=" + escape(asset.progressiveUrl) + "&";
                    } else {
                      this.assetsKeyValues += escape(assetName) + "=" + ((self.location.protocol.toLowerCase() != 'https:') ?
                          escape(asset.progressiveUrl) : escape(asset.securedProgressiveUrl)) + "&";
                    }
                  }
                }
                var videoKeyValues = "";
                this.processVideoUrl = function(videoUrl, downloadPrefix, urlType, videoComponentName) {
                  var urlKey;
                  if(this.isAbsoluteUrl(videoUrl)) {
                    urlKey = escape(urlType + "_" + videoComponentName);
                    this.assetsKeyValues += urlKey + "=" + escape(videoUrl) + "&";
                  } else {
                    urlKey = videoUrl.length > 0 ? escape(downloadPrefix + videoUrl) : "";
                  }
                  return urlKey;
                }
                var componentDelimiter = "{DELIM}";
                for(var name in this.videoComponents) {
                  if (!core.isPartOfArrayPrototype(name)) {
                    var vc = this.videoComponents[name];
                    var value = "name:" + escape(name) + componentDelimiter;
                    if (!vc.html5Video) {
                      var prefix = (vc.isStreaming) ? "STR_" : "PRO_";
                      var value = "name:" + escape(name) + ",startMuted:" + escape(vc.startMuted)
                          + ",autoBuffer:" + escape(vc.autoBuffer) + ",loopCount:" + escape(vc.loopCount)
                          + ",isStreaming:" + escape(vc.isStreaming);
                      var lowVideo = this.processVideoUrl(vc.lowBWVideo, prefix, "low_video", name);
                      var midVideo = this.processVideoUrl(vc.midBWVideo, prefix, "mid_video", name);
                      var highVideo = this.processVideoUrl(vc.highBWVideo, prefix, "high_video", name);
                      var fallbackLowVideo = this.processVideoUrl(vc.lowBWFallbackVideo, "PRO_", "low_fallback", name);
                      var fallbackMidVideo = this.processVideoUrl(vc.midBWFallbackVideo, "PRO_", "mid_fallback", name);
                      var fallbackHighVideo = this.processVideoUrl(vc.highBWFallbackVideo, "PRO_", "high_fallback", name);
                      value += ",vfp_low:" + lowVideo + ",vfp_mid:" + midVideo + ",vfp_high:" + highVideo
                          + ",pfp_low:" + fallbackLowVideo + ",pfp_mid:" + fallbackMidVideo
                          + ",pfp_high:" + fallbackHighVideo + componentDelimiter;
                    }
                    videoKeyValues += value;
                  }
                }
                videoKeyValues = videoKeyValues.substring(0, videoKeyValues.length - componentDelimiter.length);
                this.assetsKeyValues = this.assetsKeyValues.substring(0, this.assetsKeyValues.length - 1);
                var isGCNAd = (creative.asContext != "") ? "true" : "false";
                var adSiteUrl = core.getSitePageUrl(creative);
                this.queryStringBase = this.swfParams + '&click='+ escape(creative.clickThroughUrl)
                                      + '&clickN=' + creative.clickN + '&rid=' + creative.renderingId
                                      + "&assets=" + escape(this.assetsKeyValues)
                                      + "&vcData=" + escape(videoKeyValues)
                                      + "&exitEvents=" + escape(exitKeyvalues)
                                      + "&googleDiscoveryUrl=" + escape(creative.googleContextDiscoveryUrl)
                                      + "&adSiteUrl=" + escape(adSiteUrl)
                                      + "&isGCNAd=" + isGCNAd;
             }
          
               function InPage_1352137484959(creative, type) {
                  this.variableName = "0_1_" + (new Date()).getTime();
                  this.url = creative.mediaServer + "/2516595/PID_1623043_IBML012_MidMarketQ2_728x90_inp_pol.swf";
                  this.altText = "";
                  this.width = "728";
                  this.height = "90";
                  this.wmode = "opaque";
                  this.duration = "none";
                  this.startTime = 0;
                  this.assetType = type;
                  this.isMainAsset = true;
                  this.cssProperty = "";
                  this.zIndex = "999";
                  this.bgColor = "#";
                  this.queryString = creative.queryStringBase + '&varName=' + this.variableName
                          + '&td=' + escape(self.location.hostname)
                          + creative.asContext + "&assetType=" + type;
              }
              function InPageHTML_1352137484959(creative, type) {
                  this.variableName = "0__" + (new Date()).getTime();
                  this.url = creative.mediaServer + "/2516595/";
                  this.altText = "";
                  this.width = "";
                  this.height = "";
                  this.assetType = type;
                  this.isMainAsset = true;
                  this.cssProperty = "";
                  this.zIndex = "999";
                  this.bgColor = "#";
                  this.queryString = creative.queryStringBase + '&varName=' + this.variableName
                          + creative.asContext + "&assetType=" + type;
              }
              var core = new RichMediaCore_72_02();
              var baseCreative = new RichMediaCreative_1352137484959(core.CREATIVE_TYPE_INPAGE);
              var creative = new PlacementCreative_1352137484959(baseCreative);
              var isFlashAssetExist = true;
              if(creative.shouldDisplayFlashAsset) {
                creative.assets[core.ASSET_TYPE_INPAGE] = new InPage_1352137484959(creative, core.ASSET_TYPE_INPAGE);
                isFlashAssetExist = creative.assets[core.ASSET_TYPE_INPAGE].url.toLowerCase().indexOf(".swf") != -1;
              }
              
              
              
              if(creative.forceHTML5Creative || creative.isHTML5PreviewMode || !creative.shouldDisplayFlashAsset || !isFlashAssetExist) {
                creative.shouldDisplayHTML5Asset = true;
                creative.assets[core.ASSET_TYPE_INPAGE] = new InPageHTML_1352137484959(creative, core.ASSET_TYPE_INPAGE);
              }
              dartRichmediaCreatives[dartRichmediaCreatives.length] = creative;
              RichMediaCore_72_02.prototype.trackCsiEvent("gb");  
              document.write('<scr' + 'ipt src="' + baseCreative.globalTemplateJs + '" language="JavaScript"></scr' + 'ipt>');
              RichMediaCore_72_02.prototype.trackCsiEvent("pe") 
