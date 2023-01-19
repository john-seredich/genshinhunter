function TestCard(props: any) {
  console.log(props.weapon);
  return <div>{props.weapon.name}</div>;
}

export default TestCard;
