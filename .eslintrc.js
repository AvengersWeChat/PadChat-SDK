module.exports = {
  root: true,
  env : {
    node: true,
    es6 : true
  },
  extends: ['eslint-config-egg'],
  globals: {
    'document': true
  },
  rules: {
    'semi': 0,
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    'comma-dangle': [1, 'always-multiline'],
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': [2, 'never'],
    'no-unused-vars'       : 'off',          // 未使用变量
    // "generator-star-spacing": ["error", { "before": false, "after": true }],
    'valid-jsdoc': ['error', {
      // 取消限制注释中必须使用 @return 标签替代 @returns标签
      prefer: {
        // returns: 'return',
      },
    }],
    "no-multi-spaces": ["error", {
      exceptions: {
        "ImportDeclaration" : true,
        "VariableDeclarator": true,
        "Property"          : false,
        "ignoreEOLComments" : true
      }
    }],
    //对象字面量中冒号的前后空格
    "key-spacing": ["error", {
      "beforeColon": true,
      "afterColon" : true
    }]
  },

}
