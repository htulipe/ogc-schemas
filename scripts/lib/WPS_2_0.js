var WPS_2_0_Module_Factory = function () {
  var WPS_2_0 = {
    n: 'WPS_2_0',
    dens: 'http:\/\/www.opengis.net\/wps\/2.0',
    deps: ['OWS_2_0'],
    tis: [{
        ln: 'GetCapabilitiesType',
        bti: 'OWS_2_0.GetCapabilitiesType',
        ps: [{
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }]
      }, {
        ln: 'Format',
        tn: null,
        ps: [{
            n: 'mimeType',
            an: {
              lp: 'mimeType'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }, {
            n: 'schema',
            an: {
              lp: 'schema'
            },
            t: 'a'
          }, {
            n: 'maximumMegabytes',
            ti: 'Integer',
            an: {
              lp: 'maximumMegabytes'
            },
            t: 'a'
          }, {
            n: '_default',
            ti: 'Boolean',
            an: {
              lp: 'default'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetStatus',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'jobID',
            en: 'JobID'
          }]
      }, {
        ln: 'GenericInputType',
        bti: '.DescriptionType',
        ps: [{
            n: 'input',
            col: true,
            en: 'Input',
            ti: '.GenericInputType'
          }, {
            n: 'minOccurs',
            ti: 'Integer',
            an: {
              lp: 'minOccurs'
            },
            t: 'a'
          }, {
            n: 'maxOccurs',
            an: {
              lp: 'maxOccurs'
            },
            t: 'a'
          }]
      }, {
        ln: 'Result',
        tn: null,
        ps: [{
            n: 'jobID',
            en: 'JobID'
          }, {
            n: 'expirationDate',
            en: 'ExpirationDate',
            ti: 'Calendar'
          }, {
            n: 'output',
            col: true,
            en: 'Output',
            ti: '.DataOutputType'
          }]
      }, {
        ln: 'ProcessSummaryType',
        bti: '.DescriptionType',
        ps: [{
            n: 'jobControlOptions',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'jobControlOptions'
            },
            t: 'a'
          }, {
            n: 'outputTransmission',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'outputTransmission'
            },
            t: 'a'
          }, {
            n: 'processVersion',
            an: {
              lp: 'processVersion'
            },
            t: 'a'
          }, {
            n: 'processModel',
            an: {
              lp: 'processModel'
            },
            t: 'a'
          }]
      }, {
        ln: 'OutputDescriptionType',
        bti: '.DescriptionType',
        ps: [{
            n: 'dataDescription',
            mx: false,
            dom: false,
            en: 'DataDescription',
            ti: '.DataDescriptionType',
            t: 'er'
          }, {
            n: 'output',
            col: true,
            en: 'Output',
            ti: '.OutputDescriptionType'
          }]
      }, {
        ln: 'ProcessOfferings',
        tn: null,
        ps: [{
            n: 'processOffering',
            col: true,
            en: 'ProcessOffering',
            ti: '.ProcessOffering'
          }]
      }, {
        ln: 'RequestBaseType',
        ps: [{
            n: 'extension',
            col: true,
            en: 'Extension',
            ti: 'AnyType'
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
          }]
      }, {
        ln: 'DataDescriptionType',
        ps: [{
            n: 'format',
            col: true,
            en: 'Format',
            ti: '.Format'
          }]
      }, {
        ln: 'ReferenceType.BodyReference',
        tn: null,
        ps: [{
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'Dismiss',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'jobID',
            en: 'JobID'
          }]
      }, {
        ln: 'DataOutputType',
        ps: [{
            n: 'data',
            en: 'Data',
            ti: '.Data'
          }, {
            n: 'reference',
            en: 'Reference',
            ti: '.ReferenceType'
          }, {
            n: 'output',
            en: 'Output',
            ti: '.DataOutputType'
          }, {
            n: 'id',
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'GenericOutputType',
        bti: '.DescriptionType',
        ps: [{
            n: 'output',
            col: true,
            en: 'Output',
            ti: '.GenericOutputType'
          }]
      }, {
        ln: 'WPSCapabilitiesType',
        bti: 'OWS_2_0.CapabilitiesBaseType',
        ps: [{
            n: 'contents',
            en: 'Contents',
            ti: '.Contents'
          }, {
            n: 'extension',
            en: 'Extension',
            ti: '.WPSCapabilitiesType.Extension'
          }, {
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }]
      }, {
        ln: 'ReferenceType',
        ps: [{
            n: 'body',
            en: 'Body',
            ti: 'AnyType'
          }, {
            n: 'bodyReference',
            en: 'BodyReference',
            ti: '.ReferenceType.BodyReference'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'mimeType',
            an: {
              lp: 'mimeType'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }, {
            n: 'schema',
            an: {
              lp: 'schema'
            },
            t: 'a'
          }]
      }, {
        ln: 'LiteralDataDomainType',
        ps: [{
            n: 'allowedValues',
            en: {
              lp: 'AllowedValues',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.AllowedValues'
          }, {
            n: 'anyValue',
            en: {
              lp: 'AnyValue',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.AnyValue'
          }, {
            n: 'valuesReference',
            en: {
              lp: 'ValuesReference',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.ValuesReference'
          }, {
            n: 'dataType',
            en: {
              lp: 'DataType',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.DomainMetadataType'
          }, {
            n: 'uom',
            en: {
              lp: 'UOM',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.DomainMetadataType'
          }, {
            n: 'defaultValue',
            en: {
              lp: 'DefaultValue',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.ValueType'
          }]
      }, {
        ln: 'ComplexDataType',
        bti: '.DataDescriptionType',
        ps: [{
            n: 'any',
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'Data',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            t: 'ae'
          }, {
            n: 'mimeType',
            an: {
              lp: 'mimeType'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }, {
            n: 'schema',
            an: {
              lp: 'schema'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetResult',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'jobID',
            en: 'JobID'
          }]
      }, {
        ln: 'BoundingBoxData',
        tn: null,
        bti: '.DataDescriptionType',
        ps: [{
            n: 'supportedCRS',
            col: true,
            en: 'SupportedCRS',
            ti: '.SupportedCRS'
          }]
      }, {
        ln: 'DataInputType',
        ps: [{
            n: 'data',
            en: 'Data',
            ti: '.Data'
          }, {
            n: 'reference',
            en: 'Reference',
            ti: '.ReferenceType'
          }, {
            n: 'input',
            col: true,
            en: 'Input',
            ti: '.DataInputType'
          }, {
            n: 'id',
            an: {
              lp: 'id'
            },
            t: 'a'
          }]
      }, {
        ln: 'SupportedCRS',
        tn: null,
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: '_default',
            ti: 'Boolean',
            an: {
              lp: 'default'
            },
            t: 'a'
          }]
      }, {
        ln: 'LiteralValue',
        tn: null,
        bti: 'OWS_2_0.ValueType',
        ps: [{
            n: 'dataType',
            an: {
              lp: 'dataType'
            },
            t: 'a'
          }, {
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'ExecuteRequestType',
        bti: '.RequestBaseType',
        ps: [{
            n: 'identifier',
            en: {
              lp: 'Identifier',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.CodeType'
          }, {
            n: 'input',
            col: true,
            en: 'Input',
            ti: '.DataInputType'
          }, {
            n: 'output',
            col: true,
            en: 'Output',
            ti: '.OutputDefinitionType'
          }, {
            n: 'mode',
            an: {
              lp: 'mode'
            },
            t: 'a'
          }, {
            n: 'response',
            an: {
              lp: 'response'
            },
            t: 'a'
          }]
      }, {
        ln: 'InputDescriptionType',
        bti: '.DescriptionType',
        ps: [{
            n: 'dataDescription',
            mx: false,
            dom: false,
            en: 'DataDescription',
            ti: '.DataDescriptionType',
            t: 'er'
          }, {
            n: 'input',
            col: true,
            en: 'Input',
            ti: '.InputDescriptionType'
          }, {
            n: 'minOccurs',
            ti: 'Integer',
            an: {
              lp: 'minOccurs'
            },
            t: 'a'
          }, {
            n: 'maxOccurs',
            an: {
              lp: 'maxOccurs'
            },
            t: 'a'
          }]
      }, {
        ln: 'WPSCapabilitiesType.Extension',
        tn: null,
        ps: [{
            n: 'any',
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'StatusInfo',
        tn: null,
        ps: [{
            n: 'jobID',
            en: 'JobID'
          }, {
            n: 'status',
            en: 'Status'
          }, {
            n: 'expirationDate',
            en: 'ExpirationDate',
            ti: 'Calendar'
          }, {
            n: 'estimatedCompletion',
            en: 'EstimatedCompletion',
            ti: 'Calendar'
          }, {
            n: 'nextPoll',
            en: 'NextPoll',
            ti: 'Calendar'
          }, {
            n: 'percentCompleted',
            en: 'PercentCompleted',
            ti: 'Int'
          }]
      }, {
        ln: 'DescribeProcess',
        tn: null,
        bti: '.RequestBaseType',
        ps: [{
            n: 'identifier',
            col: true,
            en: {
              lp: 'Identifier',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.CodeType'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'DescriptionType',
        bti: 'OWS_2_0.BasicIdentificationType'
      }, {
        ln: 'LiteralDataType',
        bti: '.DataDescriptionType',
        ps: [{
            n: 'literalDataDomain',
            col: true,
            en: {
              lp: 'LiteralDataDomain'
            },
            ti: '.LiteralDataType.LiteralDataDomain'
          }]
      }, {
        ln: 'LiteralDataType.LiteralDataDomain',
        tn: null,
        bti: '.LiteralDataDomainType',
        ps: [{
            n: '_default',
            ti: 'Boolean',
            an: {
              lp: 'default'
            },
            t: 'a'
          }]
      }, {
        ln: 'ProcessOffering',
        tn: null,
        ps: [{
            n: 'process',
            en: 'Process',
            ti: '.ProcessDescriptionType'
          }, {
            n: 'any',
            mx: false,
            t: 'ae'
          }, {
            n: 'jobControlOptions',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'jobControlOptions'
            },
            t: 'a'
          }, {
            n: 'outputTransmission',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'outputTransmission'
            },
            t: 'a'
          }, {
            n: 'processVersion',
            an: {
              lp: 'processVersion'
            },
            t: 'a'
          }, {
            n: 'processModel',
            an: {
              lp: 'processModel'
            },
            t: 'a'
          }]
      }, {
        ln: 'ProcessDescriptionType',
        bti: '.DescriptionType',
        ps: [{
            n: 'input',
            col: true,
            en: 'Input',
            ti: '.InputDescriptionType'
          }, {
            n: 'output',
            col: true,
            en: 'Output',
            ti: '.OutputDescriptionType'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'OutputDefinitionType',
        ps: [{
            n: 'output',
            en: 'Output',
            ti: '.OutputDefinitionType'
          }, {
            n: 'id',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'transmission',
            an: {
              lp: 'transmission'
            },
            t: 'a'
          }, {
            n: 'mimeType',
            an: {
              lp: 'mimeType'
            },
            t: 'a'
          }, {
            n: 'encoding',
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }, {
            n: 'schema',
            an: {
              lp: 'schema'
            },
            t: 'a'
          }]
      }, {
        ln: 'Contents',
        tn: null,
        ps: [{
            n: 'processSummary',
            col: true,
            en: 'ProcessSummary',
            ti: '.ProcessSummaryType'
          }]
      }, {
        ln: 'GenericProcessType',
        bti: '.DescriptionType',
        ps: [{
            n: 'input',
            col: true,
            en: 'Input',
            ti: '.GenericInputType'
          }, {
            n: 'output',
            col: true,
            en: 'Output',
            ti: '.GenericOutputType'
          }]
      }, {
        t: 'enum',
        ln: 'DataTransmissionModeType',
        vs: ['value', 'reference']
      }],
    eis: [{
        en: 'StatusInfo',
        ti: '.StatusInfo'
      }, {
        en: 'GetStatus',
        ti: '.GetStatus'
      }, {
        en: 'GetResult',
        ti: '.GetResult'
      }, {
        en: 'Process',
        ti: '.ProcessDescriptionType'
      }, {
        en: 'ExpirationDate',
        ti: 'Calendar'
      }, {
        en: 'GenericProcess',
        ti: '.GenericProcessType'
      }, {
        en: 'ProcessOfferings',
        ti: '.ProcessOfferings'
      }, {
        en: 'Execute',
        ti: '.ExecuteRequestType'
      }, {
        en: 'ProcessOffering',
        ti: '.ProcessOffering'
      }, {
        en: 'LiteralData',
        ti: '.LiteralDataType',
        sh: 'DataDescription'
      }, {
        en: 'DescribeProcess',
        ti: '.DescribeProcess'
      }, {
        en: 'DataDescription',
        ti: '.DataDescriptionType'
      }, {
        en: 'Reference',
        ti: '.ReferenceType'
      }, {
        en: 'ComplexData',
        ti: '.ComplexDataType',
        sh: 'DataDescription'
      }, {
        en: 'BoundingBoxData',
        ti: '.BoundingBoxData',
        sh: 'DataDescription'
      }, {
        en: 'LiteralValue',
        ti: '.LiteralValue'
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilitiesType'
      }, {
        en: 'SupportedCRS',
        ti: '.SupportedCRS'
      }, {
        en: 'Format',
        ti: '.Format'
      }, {
        en: 'JobID'
      }, {
        en: 'Contents',
        ti: '.Contents'
      }, {
        en: 'Dismiss',
        ti: '.Dismiss'
      }, {
        en: 'Data',
        ti: '.Data'
      }, {
        en: 'Capabilities',
        ti: '.WPSCapabilitiesType'
      }, {
        en: 'Result',
        ti: '.Result'
      }]
  };
  return {
    WPS_2_0: WPS_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WPS_2_0_Module_Factory);
}
else {
  var WPS_2_0_Module = WPS_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WPS_2_0 = WPS_2_0_Module.WPS_2_0;
  }
  else {
    var WPS_2_0 = WPS_2_0_Module.WPS_2_0;
  }
}