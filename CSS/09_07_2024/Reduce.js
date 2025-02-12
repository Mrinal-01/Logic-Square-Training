const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
  ];
  group=items.reduce((acc,curr)=>{
        category=curr.category
        if(!acc[category]){
                acc[category]=[]
        }
        acc[category].push(curr.name)
        return acc
  },{})

console.log(group);

// { Fruit: [ 'Apple', 'Orange' ], Vegetable: [ 'Onion', 'Lettuce' ] }




  items=[
    {
      "keys": [
        "2024-05-14"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-15"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-16"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-17"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-18"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-19"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-20"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-21"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-22"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-23"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-24"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-25"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-26"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-27"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-28"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-29"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-30"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-05-31"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-01"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-02"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-03"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-04"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-05"
      ],
      "clicks": 0,
      "impressions": 4,
      "ctr": 0,
      "position": 1
    },
    {
      "keys": [
        "2024-06-06"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-07"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-08"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-09"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-10"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-11"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-12"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-13"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-14"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-15"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-16"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-17"
      ],
      "clicks": 2,
      "impressions": 3,
      "ctr": 0.6666666666666666,
      "position": 1
    },
    {
      "keys": [
        "2024-06-18"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-19"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-20"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-21"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-22"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-23"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-24"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-25"
      ],
      "clicks": 0,
      "impressions": 3,
      "ctr": 0,
      "position": 1
    },
    {
      "keys": [
        "2024-06-26"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-27"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-28"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-29"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-06-30"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-07-01"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-07-02"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-07-03"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-07-04"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-07-05"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    },
    {
      "keys": [
        "2024-07-06"
      ],
      "clicks": 0,
      "impressions": 0,
      "ctr": 0,
      "position": 0
    }
  ]

//outpu:-   {keys: [ date .....], clicks: [ number ...], impressions: [ number ...], ctr: [ number ...], position: [ number ...] }

  
//   result=items.reduce((acc,cur)=>{
//     acc.clicks.push(cur.clicks);
//     acc.impression.push(cur.impressions)
//     acc.ctr.push(cur.ctr)
//     acc.position.push(cur.position)
//     acc.keys.push(cur.keys[0])

    
//     return acc;
//   },{keys:[],clicks:[],impression:[],ctr:[],position:[]})
  
  
// result=items.reduce((acc,curr)=>{
    
// })

//   console.log(result);
  