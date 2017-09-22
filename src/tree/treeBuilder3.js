import chooseSplit3 from './chooseSplit3';
// import mode from '../utils/utils';

function treeBuilder3(examples, def) {
  const labels = examples.map((example) => example['label']);
  const labelsNoDups = [... new Set(labels)];
  if (labelsNoDups.length === 1) {
    return labelsNoDups[0];
  } 
  const attribs = Object.keys(examples[0]).filter(attrib => attrib !== 'label');
  let split = chooseSplit3(attribs, examples, labelsNoDups);
  const tree = {
    split: {
      attrib: split['attrib'],
      val: split['val'],
    },
    left: treeBuilder3(split['left'], def),
    right: treeBuilder3(split['right'], def),  
  };
  return tree;
}

export default treeBuilder3;