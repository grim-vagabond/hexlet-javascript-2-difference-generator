import _ from 'lodash';

const stylish = (data, depth = 1) => {
  let result = '{\n';
  for (let i = 0; i < data.length; i += 1) {
    const { key, content, type } = data[i];
    let info = '  '.repeat(depth);
    if (type === 'removed') {
      info += '- ';
    }
    if (type === 'added') {
      info += '+ ';
    }
    if (type === 'unchanged' || type === 'nested') {
      info += '  ';
    }

    if (_.isObject(content)) {
      result += `${info}${key}: ${stylish(content, depth + 2)}\n`;
    } else {
      result += `${info}${key}: ${content}\n`;
    }
  }

  if (depth === 1) {
    result += '}';
  } else {
    result += `${'  '.repeat(depth - 1)}}`;
  }

  return result;
};

export default stylish;
