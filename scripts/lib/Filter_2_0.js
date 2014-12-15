var Filter_2_0_Module_Factory = function () {
  var Filter_2_0 = {
    n: 'Filter_2_0',
    dens: 'http:\/\/www.opengis.net\/fes\/2.0',
    tis: [{
        ln: 'ArgumentsType',
        ps: [{
            n: 'argument',
            col: true,
            en: 'Argument',
            ti: '.ArgumentType'
          }]
      }, {
        ln: 'TemporalCapabilitiesType',
        ps: [{
            n: 'temporalOperands',
            en: 'TemporalOperands',
            ti: '.TemporalOperandsType'
          }, {
            n: 'temporalOperators',
            en: 'TemporalOperators',
            ti: '.TemporalOperatorsType'
          }]
      }, {
        ln: 'BinaryTemporalOpType',
        bti: '.TemporalOpsType',
        ps: [{
            n: 'expressionOrAny',
            col: true,
            mx: false,
            dom: false,
            en: 'expression',
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        ln: 'ConformanceType',
        ps: [{
            n: 'constraint',
            col: true,
            en: 'Constraint',
            ti: 'OWS_1_1_0.DomainType'
          }]
      }, {
        ln: 'SpatialOperatorsType',
        ps: [{
            n: 'spatialOperator',
            col: true,
            en: 'SpatialOperator',
            ti: '.SpatialOperatorType'
          }]
      }, {
        ln: 'DistanceBufferType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'expressionOrAny',
            col: true,
            mx: false,
            dom: false,
            en: 'expression',
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'distance',
            en: 'Distance',
            ti: '.MeasureType'
          }]
      }, {
        ln: 'SpatialOpsType'
      }, {
        ln: 'BinaryComparisonOpType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'matchCase',
            ti: 'Boolean',
            an: {
              lp: 'matchCase'
            },
            t: 'a'
          }, {
            n: 'matchAction',
            an: {
              lp: 'matchAction'
            },
            t: 'a'
          }]
      }, {
        ln: 'LogicOpsType'
      }, {
        ln: 'AbstractQueryExpressionType',
        ps: [{
            n: 'handle',
            an: {
              lp: 'handle'
            },
            t: 'a'
          }]
      }, {
        ln: 'TemporalOpsType'
      }, {
        ln: 'ComparisonOpsType'
      }, {
        ln: 'TemporalOperatorType',
        ps: [{
            n: 'temporalOperands',
            en: 'TemporalOperands',
            ti: '.TemporalOperandsType'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'AvailableFunctionType',
        ps: [{
            n: 'metadata',
            en: {
              lp: 'Metadata',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.MetadataType'
          }, {
            n: 'returns',
            en: 'Returns',
            ti: 'QName'
          }, {
            n: 'arguments',
            en: 'Arguments',
            ti: '.ArgumentsType'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'BBOXType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'expressionOrAny',
            col: true,
            mx: false,
            dom: false,
            en: 'expression',
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        ln: 'ExtendedCapabilitiesType',
        ps: [{
            n: 'additionalOperators',
            en: 'AdditionalOperators',
            ti: '.AdditionalOperatorsType'
          }]
      }, {
        ln: 'ResourceIdType',
        bti: '.AbstractIdType',
        ps: [{
            n: 'rid',
            an: {
              lp: 'rid'
            },
            t: 'a'
          }, {
            n: 'previousRid',
            an: {
              lp: 'previousRid'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'startDate',
            ti: 'Calendar',
            an: {
              lp: 'startDate'
            },
            t: 'a'
          }, {
            n: 'endDate',
            ti: 'Calendar',
            an: {
              lp: 'endDate'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractAdhocQueryExpressionType',
        bti: '.AbstractQueryExpressionType',
        ps: [{
            n: 'abstractProjectionClause',
            col: true,
            en: 'AbstractProjectionClause',
            ti: 'AnyType'
          }, {
            n: 'abstractSelectionClause',
            mx: false,
            dom: false,
            typed: false,
            en: 'AbstractSelectionClause',
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'abstractSortingClause',
            mx: false,
            dom: false,
            typed: false,
            en: 'AbstractSortingClause',
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'typeNames',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'typeNames'
            },
            t: 'a'
          }, {
            n: 'aliases',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'aliases'
            },
            t: 'a'
          }]
      }, {
        ln: 'AbstractSelectionClauseType'
      }, {
        ln: 'PropertyIsLikeType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'wildCard',
            an: {
              lp: 'wildCard'
            },
            t: 'a'
          }, {
            n: 'singleChar',
            an: {
              lp: 'singleChar'
            },
            t: 'a'
          }, {
            n: 'escapeChar',
            an: {
              lp: 'escapeChar'
            },
            t: 'a'
          }]
      }, {
        ln: 'TemporalOperandsType',
        ps: [{
            n: 'temporalOperand',
            col: true,
            en: 'TemporalOperand',
            ti: '.TemporalOperandsType.TemporalOperand'
          }]
      }, {
        ln: 'AvailableFunctionsType',
        ps: [{
            n: 'function',
            col: true,
            en: 'Function',
            ti: '.AvailableFunctionType'
          }]
      }, {
        ln: 'PropertyIsNullType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            mx: false,
            dom: false,
            typed: false,
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        ln: 'SortByType',
        ps: [{
            n: 'sortProperty',
            col: true,
            en: 'SortProperty',
            ti: '.SortPropertyType'
          }]
      }, {
        ln: 'LogicalOperators'
      }, {
        ln: 'ResourceIdentifierType',
        ps: [{
            n: 'metadata',
            en: {
              lp: 'Metadata',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.MetadataType'
          }, {
            n: 'name',
            ti: 'QName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'SpatialCapabilitiesType',
        ps: [{
            n: 'geometryOperands',
            en: 'GeometryOperands',
            ti: '.GeometryOperandsType'
          }, {
            n: 'spatialOperators',
            en: 'SpatialOperators',
            ti: '.SpatialOperatorsType'
          }]
      }, {
        ln: 'ExtensionOperatorType',
        ps: [{
            n: 'name',
            ti: 'QName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'UnaryLogicOpType',
        bti: '.LogicOpsType',
        ps: [{
            n: 'comparisonOps',
            mx: false,
            dom: false,
            typed: false,
            ti: '.ComparisonOpsType',
            t: 'er'
          }, {
            n: 'spatialOps',
            mx: false,
            dom: false,
            typed: false,
            ti: '.SpatialOpsType',
            t: 'er'
          }, {
            n: 'temporalOps',
            mx: false,
            dom: false,
            typed: false,
            ti: '.TemporalOpsType',
            t: 'er'
          }, {
            n: 'logicOps',
            mx: false,
            dom: false,
            typed: false,
            ti: '.LogicOpsType',
            t: 'er'
          }, {
            n: 'extensionOps',
            ti: '.ExtensionOpsType'
          }, {
            n: 'function',
            en: 'Function',
            ti: '.FunctionType'
          }, {
            n: 'id',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: '_Id',
            ti: '.AbstractIdType',
            t: 'er'
          }]
      }, {
        ln: 'AbstractIdType'
      }, {
        ln: 'AdditionalOperatorsType',
        ps: [{
            n: 'operator',
            col: true,
            en: 'Operator',
            ti: '.ExtensionOperatorType'
          }]
      }, {
        ln: 'GeometryOperandsType.GeometryOperand',
        ps: [{
            n: 'name',
            ti: 'QName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'IdCapabilitiesType',
        ps: [{
            n: 'resourceIdentifier',
            col: true,
            en: 'ResourceIdentifier',
            ti: '.ResourceIdentifierType'
          }]
      }, {
        ln: 'SpatialOperatorType',
        ps: [{
            n: 'geometryOperands',
            en: 'GeometryOperands',
            ti: '.GeometryOperandsType'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'ExtensionOpsType'
      }, {
        ln: 'LowerBoundaryType',
        ps: [{
            n: 'expression',
            mx: false,
            dom: false,
            typed: false,
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        ln: 'AbstractProjectionClauseType'
      }, {
        ln: 'FilterType',
        bti: '.AbstractSelectionClauseType',
        ps: [{
            n: 'comparisonOps',
            mx: false,
            dom: false,
            typed: false,
            ti: '.ComparisonOpsType',
            t: 'er'
          }, {
            n: 'spatialOps',
            mx: false,
            dom: false,
            typed: false,
            ti: '.SpatialOpsType',
            t: 'er'
          }, {
            n: 'temporalOps',
            mx: false,
            dom: false,
            typed: false,
            ti: '.TemporalOpsType',
            t: 'er'
          }, {
            n: 'logicOps',
            mx: false,
            dom: false,
            typed: false,
            ti: '.LogicOpsType',
            t: 'er'
          }, {
            n: 'extensionOps',
            ti: '.ExtensionOpsType'
          }, {
            n: 'function',
            en: 'Function',
            ti: '.FunctionType'
          }, {
            n: 'id',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            en: '_Id',
            ti: '.AbstractIdType',
            t: 'er'
          }]
      }, {
        ln: 'ScalarCapabilitiesType',
        ps: [{
            n: 'logicalOperators',
            en: 'LogicalOperators',
            ti: '.LogicalOperators'
          }, {
            n: 'comparisonOperators',
            en: 'ComparisonOperators',
            ti: '.ComparisonOperatorsType'
          }]
      }, {
        ln: 'ComparisonOperatorType',
        ps: [{
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeometryOperandsType',
        ps: [{
            n: 'geometryOperand',
            col: true,
            en: 'GeometryOperand',
            ti: '.GeometryOperandsType.GeometryOperand'
          }]
      }, {
        ln: 'FilterCapabilities',
        ps: [{
            n: 'conformance',
            en: 'Conformance',
            ti: '.ConformanceType'
          }, {
            n: 'idCapabilities',
            en: 'Id_Capabilities',
            ti: '.IdCapabilitiesType'
          }, {
            n: 'scalarCapabilities',
            en: 'Scalar_Capabilities',
            ti: '.ScalarCapabilitiesType'
          }, {
            n: 'spatialCapabilities',
            en: 'Spatial_Capabilities',
            ti: '.SpatialCapabilitiesType'
          }, {
            n: 'temporalCapabilities',
            en: 'Temporal_Capabilities',
            ti: '.TemporalCapabilitiesType'
          }, {
            n: 'functions',
            en: 'Functions',
            ti: '.AvailableFunctionsType'
          }, {
            n: 'extendedCapabilities',
            en: 'Extended_Capabilities',
            ti: '.ExtendedCapabilitiesType'
          }]
      }, {
        ln: 'ArgumentType',
        ps: [{
            n: 'metadata',
            en: {
              lp: 'Metadata',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.MetadataType'
          }, {
            n: 'type',
            en: 'Type',
            ti: 'QName'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'TemporalOperatorsType',
        ps: [{
            n: 'temporalOperator',
            col: true,
            en: 'TemporalOperator',
            ti: '.TemporalOperatorType'
          }]
      }, {
        ln: 'BinarySpatialOpType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'expressionOrAny',
            col: true,
            mx: false,
            dom: false,
            en: 'expression',
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        ln: 'PropertyIsNilType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            mx: false,
            dom: false,
            typed: false,
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'nilReason',
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }]
      }, {
        ln: 'PropertyIsBetweenType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            mx: false,
            dom: false,
            typed: false,
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'lowerBoundary',
            en: 'LowerBoundary',
            ti: '.LowerBoundaryType'
          }, {
            n: 'upperBoundary',
            en: 'UpperBoundary',
            ti: '.UpperBoundaryType'
          }]
      }, {
        ln: 'FunctionType',
        ps: [{
            n: 'expression',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'MeasureType',
        ps: [{
            n: 'value',
            ti: 'Double',
            t: 'v'
          }, {
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'SortPropertyType',
        ps: [{
            n: 'valueReference',
            en: 'ValueReference'
          }, {
            n: 'sortOrder',
            en: 'SortOrder'
          }]
      }, {
        ln: 'BinaryLogicOpType',
        bti: '.LogicOpsType',
        ps: [{
            n: 'comparisonOpsOrSpatialOpsOrTemporalOps',
            col: true,
            mx: false,
            dom: false,
            typed: false,
            etis: [{
                en: 'temporalOps',
                ti: '.TemporalOpsType'
              }, {
                en: '_Id',
                ti: '.AbstractIdType'
              }, {
                en: 'comparisonOps',
                ti: '.ComparisonOpsType'
              }, {
                en: 'spatialOps',
                ti: '.SpatialOpsType'
              }, {
                en: 'logicOps',
                ti: '.LogicOpsType'
              }, {
                en: 'Function',
                ti: '.FunctionType'
              }, {
                en: 'extensionOps',
                ti: '.ExtensionOpsType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'AbstractSortingClauseType'
      }, {
        ln: 'ComparisonOperatorsType',
        ps: [{
            n: 'comparisonOperator',
            col: true,
            en: 'ComparisonOperator',
            ti: '.ComparisonOperatorType'
          }]
      }, {
        ln: 'TemporalOperandsType.TemporalOperand',
        ps: [{
            n: 'name',
            ti: 'QName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'LiteralType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            t: 'ae'
          }, {
            n: 'type',
            ti: 'QName',
            an: {
              lp: 'type'
            },
            t: 'a'
          }]
      }, {
        ln: 'UpperBoundaryType',
        ps: [{
            n: 'expression',
            mx: false,
            dom: false,
            typed: false,
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        t: 'enum',
        ln: 'MatchActionType',
        vs: ['All', 'Any', 'One']
      }, {
        t: 'enum',
        ln: 'SortOrderType',
        vs: ['DESC', 'ASC']
      }, {
        t: 'enum',
        ln: 'VersionActionTokens',
        vs: ['FIRST', 'LAST', 'PREVIOUS', 'NEXT', 'ALL']
      }],
    eis: [{
        en: 'Intersects',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Begins',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'expression',
        ti: 'AnyType'
      }, {
        en: 'extensionOps',
        ti: '.ExtensionOpsType'
      }, {
        en: 'PropertyIsGreaterThanOrEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Meets',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'PropertyIsNull',
        ti: '.PropertyIsNullType',
        sh: 'comparisonOps'
      }, {
        en: 'Beyond',
        ti: '.DistanceBufferType',
        sh: 'spatialOps'
      }, {
        en: 'EndedBy',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'comparisonOps',
        ti: '.ComparisonOpsType'
      }, {
        en: 'PropertyIsLike',
        ti: '.PropertyIsLikeType',
        sh: 'comparisonOps'
      }, {
        en: 'Contains',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: '_Id',
        ti: '.AbstractIdType'
      }, {
        en: 'PropertyIsNil',
        ti: '.PropertyIsNilType',
        sh: 'comparisonOps'
      }, {
        en: 'AbstractSelectionClause',
        ti: 'AnyType'
      }, {
        en: 'TContains',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'PropertyIsLessThanOrEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Filter',
        ti: '.FilterType',
        sh: 'AbstractSelectionClause'
      }, {
        en: 'ResourceId',
        ti: '.ResourceIdType',
        sh: '_Id'
      }, {
        en: 'Crosses',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'logicOps',
        ti: '.LogicOpsType'
      }, {
        en: 'After',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'And',
        ti: '.BinaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'Touches',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Before',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'AnyInteracts',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'Filter_Capabilities',
        ti: '.FilterCapabilities'
      }, {
        en: 'Function',
        ti: '.FunctionType',
        sh: 'expression'
      }, {
        en: 'AbstractQueryExpression',
        ti: '.AbstractQueryExpressionType'
      }, {
        en: 'BegunBy',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'PropertyIsBetween',
        ti: '.PropertyIsBetweenType',
        sh: 'comparisonOps'
      }, {
        en: 'SortBy',
        ti: '.SortByType',
        sh: 'AbstractSortingClause'
      }, {
        en: 'LogicalOperators',
        ti: '.LogicalOperators'
      }, {
        en: 'PropertyIsLessThan',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Ends',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'Not',
        ti: '.UnaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'AbstractSortingClause',
        ti: 'AnyType'
      }, {
        en: 'PropertyIsGreaterThan',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Equals',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'TEquals',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'temporalOps',
        ti: '.TemporalOpsType'
      }, {
        en: 'OverlappedBy',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'ValueReference',
        sh: 'expression'
      }, {
        en: 'BBOX',
        ti: '.BBOXType',
        sh: 'spatialOps'
      }, {
        en: 'Disjoint',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Within',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'PropertyIsNotEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'AbstractAdhocQueryExpression',
        ti: '.AbstractAdhocQueryExpressionType',
        sh: 'AbstractQueryExpression'
      }, {
        en: 'Literal',
        ti: '.LiteralType',
        sh: 'expression'
      }, {
        en: 'AbstractProjectionClause',
        ti: 'AnyType'
      }, {
        en: 'During',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'Or',
        ti: '.BinaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'Overlaps',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'TOverlaps',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'PropertyIsEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'DWithin',
        ti: '.DistanceBufferType',
        sh: 'spatialOps'
      }, {
        en: 'MetBy',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'spatialOps',
        ti: '.SpatialOpsType'
      }]
  };
  return {
    Filter_2_0: Filter_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Filter_2_0_Module_Factory);
}
else {
  var Filter_2_0_Module = Filter_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Filter_2_0 = Filter_2_0_Module.Filter_2_0;
  }
  else {
    var Filter_2_0 = Filter_2_0_Module.Filter_2_0;
  }
}