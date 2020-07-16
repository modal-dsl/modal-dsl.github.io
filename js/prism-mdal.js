Prism.languages.mdAL = {
    'comment': /\/\/.+/,
    'keyword': /\b(?<=[^\\w\"'-]|^)(solution|master|supplemental|document|header|line|ledgerEntry|field|fields|template|include|group|cardPage|documentPage|listPartPage|listPage)(?=[^\\w\"'-]|$)\b/,
    'variable': /\b(?<=[^\\w\"'-]|^)(true|false|Boolean|Integer|BigInteger|Decimal|Code|Text|Date|Time|DateTime|Guid|Blob|Enum|Option|Media|MediaSet|DateFormula|Duration|RecordId|TableFilter)(?=[^\\w\"'-]|$)\b/,
    'punctuation': /[(){}\[\],;]/,
};