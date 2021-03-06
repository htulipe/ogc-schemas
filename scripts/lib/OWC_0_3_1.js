var OWC_0_3_1_Module_Factory = function () {
  var OWC_0_3_1 = {
    n: 'OWC_0_3_1',
    dens: 'http:\/\/www.opengis.net\/ows-context',
    deps: ['GML_2_1_2', 'OWS_1_0_0', 'SLD_1_0_0', 'Filter_1_0_0'],
    tis: [{
        ln: 'FormatListType',
        ps: [{
            n: 'format',
            col: true,
            en: 'Format',
            ti: '.FormatType'
          }]
      }, {
        ln: 'OWSContextType',
        ps: [{
            n: 'general',
            en: 'General',
            ti: '.GeneralType'
          }, {
            n: 'resourceList',
            en: 'ResourceList',
            ti: '.ResourceListType'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'id',
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeneralType',
        ps: [{
            n: 'window',
            en: 'Window',
            ti: '.WindowType'
          }, {
            n: 'boundingBox',
            mx: false,
            dom: false,
            en: {
              lp: 'BoundingBox',
              ns: 'http:\/\/www.opengis.net\/ows'
            },
            ti: 'OWS_1_0_0.BoundingBoxType',
            t: 'er'
          }, {
            n: 'minScaleDenominator',
            en: {
              lp: 'MinScaleDenominator',
              ns: 'http:\/\/www.opengis.net\/sld'
            },
            ti: 'Double'
          }, {
            n: 'maxScaleDenominator',
            en: {
              lp: 'MaxScaleDenominator',
              ns: 'http:\/\/www.opengis.net\/sld'
            },
            ti: 'Double'
          }, {
            n: 'title',
            en: {
              lp: 'Title',
              ns: 'http:\/\/www.opengis.net\/ows'
            }
          }, {
            n: '_abstract',
            en: {
              lp: 'Abstract',
              ns: 'http:\/\/www.opengis.net\/ows'
            }
          }, {
            n: 'keywords',
            en: {
              lp: 'Keywords',
              ns: 'http:\/\/www.opengis.net\/ows'
            },
            ti: 'OWS_1_0_0.KeywordsType'
          }, {
            n: 'logoURL',
            en: 'LogoURL',
            ti: '.URLType'
          }, {
            n: 'descriptionURL',
            en: 'DescriptionURL',
            ti: '.URLType'
          }, {
            n: 'serviceProvider',
            en: {
              lp: 'ServiceProvider',
              ns: 'http:\/\/www.opengis.net\/ows'
            },
            ti: 'OWS_1_0_0.ServiceProvider'
          }, {
            n: 'extension',
            en: 'Extension',
            ti: '.ExtensionType'
          }]
      }, {
        ln: 'ResourceListType',
        ps: [{
            n: 'layer',
            col: true,
            en: 'Layer',
            ti: '.LayerType'
          }]
      }, {
        ln: 'StyleListType',
        ps: [{
            n: 'style',
            col: true,
            en: 'Style',
            ti: '.StyleType'
          }]
      }, {
        ln: 'WindowType',
        ps: [{
            n: 'width',
            ti: 'Integer',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            ti: 'Integer',
            an: {
              lp: 'height'
            },
            t: 'a'
          }]
      }, {
        ln: 'URLType',
        ps: [{
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }, {
            n: 'width',
            ti: 'Integer',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            ti: 'Integer',
            an: {
              lp: 'height'
            },
            t: 'a'
          }, {
            n: 'format',
            an: {
              lp: 'format'
            },
            t: 'a'
          }]
      }, {
        ln: 'DimensionListType',
        ps: [{
            n: 'dimension',
            col: true,
            en: 'Dimension',
            ti: '.DimensionType'
          }]
      }, {
        ln: 'LayerType',
        bti: '.AbstractResourceType',
        ps: [{
            n: 'dimensionList',
            en: 'DimensionList',
            ti: '.DimensionListType'
          }, {
            n: 'responseCRS',
            en: 'ResponseCRS'
          }, {
            n: 'parameterList',
            en: 'ParameterList',
            ti: '.ParameterListType'
          }, {
            n: 'depth',
            en: 'Depth'
          }, {
            n: 'resx',
            en: 'Resx'
          }, {
            n: 'resy',
            en: 'Resy'
          }, {
            n: 'resz',
            en: 'Resz'
          }, {
            n: 'maxFeatures',
            en: 'MaxFeatures',
            ti: 'Integer'
          }, {
            n: 'filter',
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.FilterType'
          }, {
            n: 'inlineGeometry',
            en: 'InlineGeometry',
            ti: '.InlineFeatureCollectionType'
          }, {
            n: 'document',
            col: true,
            mx: false,
            t: 'ae'
          }, {
            n: 'vendorExtension',
            en: 'VendorExtension',
            ti: '.ExtensionType'
          }, {
            n: 'queryable',
            ti: 'Boolean',
            an: {
              lp: 'queryable'
            },
            t: 'a'
          }]
      }, {
        ln: 'ServerType',
        ps: [{
            n: 'onlineResource',
            col: true,
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }, {
            n: '_default',
            ti: 'Boolean',
            an: {
              lp: 'default'
            },
            t: 'a'
          }, {
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }]
      }, {
        ln: 'SLDType',
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: 'legendURL',
            en: 'LegendURL',
            ti: '.URLType'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }, {
            n: 'styledLayerDescriptor',
            en: {
              lp: 'StyledLayerDescriptor',
              ns: 'http:\/\/www.opengis.net\/sld'
            },
            ti: 'SLD_1_0_0.StyledLayerDescriptor'
          }, {
            n: 'featureTypeStyle',
            en: {
              lp: 'FeatureTypeStyle',
              ns: 'http:\/\/www.opengis.net\/sld'
            },
            ti: 'SLD_1_0_0.FeatureTypeStyle'
          }]
      }, {
        ln: 'FormatType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'current',
            ti: 'Boolean',
            an: {
              lp: 'current'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractResourceType',
        bti: 'OWS_1_0_0.IdentificationType',
        ps: [{
            n: 'server',
            col: true,
            en: 'Server',
            ti: '.ServerType'
          }, {
            n: 'dataURL',
            en: 'DataURL',
            ti: '.URLType'
          }, {
            n: 'metadataURL',
            en: 'MetadataURL',
            ti: '.URLType'
          }, {
            n: 'minScaleDenominator',
            en: {
              lp: 'MinScaleDenominator',
              ns: 'http:\/\/www.opengis.net\/sld'
            },
            ti: 'Double'
          }, {
            n: 'maxScaleDenominator',
            en: {
              lp: 'MaxScaleDenominator',
              ns: 'http:\/\/www.opengis.net\/sld'
            },
            ti: 'Double'
          }, {
            n: 'styleList',
            en: 'StyleList',
            ti: '.StyleListType'
          }, {
            n: 'extension',
            en: 'Extension',
            ti: '.ExtensionType'
          }, {
            n: 'layer',
            col: true,
            en: 'Layer',
            ti: '.LayerType'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'id',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'group',
            an: {
              lp: 'group'
            },
            t: 'a'
          }, {
            n: 'hidden',
            ti: 'Boolean',
            an: {
              lp: 'hidden'
            },
            t: 'a'
          }, {
            n: 'opacity',
            ti: 'Decimal',
            an: {
              lp: 'opacity'
            },
            t: 'a'
          }]
      }, {
        ln: 'ExtensionType',
        ps: [{
            n: 'any',
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'OnlineResourceType',
        bti: 'OWS_1_0_0.OnlineResourceType',
        ps: [{
            n: 'method',
            an: {
              lp: 'method'
            },
            t: 'a'
          }]
      }, {
        ln: 'ParameterListType',
        ps: [{
            n: 'parameter',
            col: true,
            en: 'Parameter',
            ti: '.ExtensionType'
          }]
      }, {
        ln: 'InlineFeatureCollectionType',
        bti: 'GML_2_1_2.AbstractFeatureCollectionType'
      }, {
        ln: 'StyleType',
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'legendURL',
            en: 'LegendURL',
            ti: '.URLType'
          }, {
            n: 'sld',
            en: 'SLD',
            ti: '.SLDType'
          }, {
            n: 'current',
            ti: 'Boolean',
            an: {
              lp: 'current'
            },
            t: 'a'
          }]
      }, {
        ln: 'DimensionType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'units',
            an: {
              lp: 'units'
            },
            t: 'a'
          }, {
            n: 'unitSymbol',
            an: {
              lp: 'unitSymbol'
            },
            t: 'a'
          }, {
            n: 'userValue',
            an: {
              lp: 'userValue'
            },
            t: 'a'
          }, {
            n: '_default',
            an: {
              lp: 'default'
            },
            t: 'a'
          }, {
            n: 'multipleValues',
            ti: 'Boolean',
            an: {
              lp: 'multipleValues'
            },
            t: 'a'
          }, {
            n: 'nearestValue',
            ti: 'Boolean',
            an: {
              lp: 'nearestValue'
            },
            t: 'a'
          }, {
            n: 'current',
            ti: 'Boolean',
            an: {
              lp: 'current'
            },
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'MethodType',
        vs: ['GET', 'POST']
      }, {
        t: 'enum',
        ln: 'ServiceType',
        vs: ['urn:ogc:serviceType:WMS', 'urn:ogc:serviceType:WFS', 'urn:ogc:serviceType:WCS', 'urn:ogc:serviceType:GML', 'urn:ogc:serviceType:SLD', 'urn:ogc:serviceType:FES', 'urn:ogc:serviceType:KML']
      }],
    eis: [{
        en: 'ResourceList',
        ti: '.ResourceListType'
      }, {
        en: 'Layer',
        ti: '.LayerType'
      }, {
        en: 'OWSContext',
        ti: '.OWSContextType'
      }]
  };
  return {
    OWC_0_3_1: OWC_0_3_1
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OWC_0_3_1_Module_Factory);
}
else {
  var OWC_0_3_1_Module = OWC_0_3_1_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OWC_0_3_1 = OWC_0_3_1_Module.OWC_0_3_1;
  }
  else {
    var OWC_0_3_1 = OWC_0_3_1_Module.OWC_0_3_1;
  }
}