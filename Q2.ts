import * as assert from 'assert';

import { map } from 'ramda'
import {filter} from 'ramda'
import {reduce} from 'ramda'

{
 //this is type BinTree
 interface BinTree {
    root: number;
    left?: BinTree;
    right?: BinTree;
};

//Q.2.1.1
const TreePreArray =(ourT:BinTree):number[] => {

    let list = new Array<number>();
    if(ourT==undefined){
    return list 
    }
    
    else {
        list.push(ourT.root)
        
        if(ourT.left!=undefined)
            list = list.concat(TreePreArray(ourT.left))
        
        if(ourT.right!=undefined)
            list = list.concat(TreePreArray(ourT.right))
       
    }
    return list
}

//checking for Q.2.1.1
const assert = require('assert');

function testTreePreArray(){
    //check if Two TreePreArray with the same tree is equal.
    let check : BinTree = {root: 1};
    let check1 : BinTree = {root: 1};
    assert.deepEqual(TreePreArray(check) , TreePreArray(check1));

    //check if TreePreArray return array in the right order (Pre).
    let check2 : BinTree = {
        root: 1,
        left: { root: 4 },
        right: { root: 5 }
    }
    let list = [1, 4, 5 ]
    assert.deepEqual(TreePreArray(check2) ,list ,"TreePreArray(check2)===[1,4,5]" );

    //check if Two tree without the same root is not equal.
    let check3 : BinTree = {root: 0, left:{root:1},right:{root:2}};
    assert.notDeepEqual(TreePreArray(check) , TreePreArray(check3) ,"[1]!=[0,1,2]");
   
    //check if TreePreArray return array in the right order (Pre).
    let check4 : BinTree = {
        root: 1 , 
        left: { root: 2 ,left: { root: 3 } , right: { root: 4} },
        right:{root:5 , left:{root: 6 } , right: {root: 7} }
    }
    let list1 = [1,2,3,4,5,6,7]
    assert.deepEqual(TreePreArray(check4) ,list1 ,"TreePreArray(check4)===[1,2,3,4,5,6,7]" );

    return true;
}
console.log("Test TreePreArray:");
console.log(testTreePreArray());

/*
let check : BinTree = {
    root: 1,
   left: { root: 4 },
    right: { root: 5 }
}

let check1 : BinTree = {
    root: 1 , 
    left: { root: 2 ,left: { root: 3 } , right: { root: 4} },
    right:{root:5 , left:{root: 6 } , right: {root: 7} }
}
console.log(TreePreArray(check1));
console.log((TreePreArray(check)));
*/


//Q.2.1.2
const TreeInArray =(ourT:BinTree):number[] => {

    let list = new Array<number>();
    if(ourT==undefined){
        return list 
    }
    else {
        if(ourT.left!=undefined) 
            list = list.concat(TreeInArray(ourT.left))
        
        list.push(ourT.root)
        
        if(ourT.right!=undefined) 
            list = list.concat(TreeInArray(ourT.right))
       
    }
    return list
}

//checking for Q.2.1.2
function testTreeInArray(){
    //check if Two TreeInArray with the same tree is equal.
    let check : BinTree = {root: 1};
    let check1 : BinTree = {root: 1};
    assert.deepEqual(TreeInArray(check) , TreeInArray(check1));

    //check if TreeInArray return array in the right order (Pre).
    let check2 : BinTree = {
        root: 1,
        left: { root: 4 },
        right: { root: 5 }
    }
    let list = [4, 1 , 5 ];
    assert.deepEqual(TreeInArray(check2) ,list ,"TreeInArray(check2)===[4,1,5]" );

    //check if Two tree without the same root is not equal.
    let check3 : BinTree = {root: 0, left:{root:1},right:{root:2}};
    assert.notDeepEqual(TreeInArray(check) , TreeInArray(check3) ,"[1]!=[1,0,2]");
   
    //check if TreeInArray return array in the right order (In).
    let check4 : BinTree = {
        root: 1 , 
        left: { root: 2 ,left: { root: 3 } , right: { root: 4} },
        right:{root:5 , left:{root: 6 } , right: {root: 7} }
    }
    let list1 = [3,2,4,1,6,5,7]
    assert.deepEqual(TreeInArray(check4) ,list1 ,"TreeInArray(check4)===[3,2,4,1,6,5,7]" );

    //check if TreeInArray != TreePreArray for the same "tree".
    assert.notDeepEqual(TreeInArray(check4),TreePreArray(check4),"[3,2,4,1,6,5,7] != [1,2,3,4,5,6,7]")

    return true;
}
console.log("Test TreeInArray:");
console.log(testTreeInArray());


/*
let check2 : BinTree = {
    root: 1,
    left: { root: 4 },
    right: { root: 5 }
}
console.log((TreeInArray(check2)));
*/

//Q.2.1.3
const TreePostArray =(ourT:BinTree):number[] => {
    let list = new Array<number>();
    if(ourT==undefined){
        return list 
    }
    else {
        if(ourT.left!=undefined) 
            list = list.concat(TreePostArray(ourT.left))
        
        if(ourT.right!=undefined) 
            list = list.concat(TreePostArray(ourT.right))
        
        list.push(ourT.root)   
    }
    return list
}


//checking for Q.2.1.3
function testTreePostArray(){
    //check if Two TreePostArray with the same tree is equal.
    let check : BinTree = {root: 1};
    let check1 : BinTree = {root: 1};
    assert.deepEqual(TreePostArray(check) , TreePostArray(check1));

    //check if TreePostArray return array in the right order (Pre).
    let check2 : BinTree = {
        root: 1,
        left: { root: 4 },
        right: { root: 5 }
    }
    let list = [4, 5 , 1 ];
    assert.deepEqual(TreePostArray(check2) ,list ,"TreePostArray(check2)===[4,5,1]" );

    //check if Two tree without the same root is not equal.
    let check3 : BinTree = {root: 0, left:{root:1},right:{root:2}};
    assert.notDeepEqual(TreePostArray(check) , TreePostArray(check3) ,"[1]!=[1,2,0]");
   
    //check if TreePostArray return array in the right order (Post).
    let check4 : BinTree = {
        root: 1 , 
        left: { root: 2 ,left: { root: 3 } , right: { root: 4} },
        right:{root:5 , left:{root: 6 } , right: {root: 7} }
    }
    let list1 = [3,4,2,6,7,5,1]
    assert.deepEqual(TreePostArray(check4) ,list1 ,"TreePostArray(check4)===[3,4,2,6,7,5,1]" );

    //check if TreePostArray != TreePreArray for the same "tree".
    assert.notDeepEqual(TreePostArray(check4),TreePreArray(check4),"[3,4,2,6,7,5,1] != [1,2,3,4,5,6,7]")

    //check if TreePostArray != TreeInArray for the same "tree".
    assert.notDeepEqual(TreePostArray(check4),TreeInArray(check4),"[3,4,2,6,7,5,1] != [3,2,4,1,6,5,7]")
  
    return true;
}
console.log("Test TreePostArray:");
console.log(testTreePostArray());


/*
let check3 : BinTree = {
    root: 1,
    left: { root: 4 },
    right: { root: 5 }
}
console.log((TreePostArray(check3)));
*/

}; //close the block for BinTree interface!!!

{ //open block for GBinTree
interface GBinTree<T>{
    root: T;
    left?: GBinTree<T>;
    right?: GBinTree<T>;
};



//Q.2.1.4
const GBinTreePreArray : <T>(ourT:GBinTree<T>) => Array<T> = <T>(ourT:GBinTree<T>) => {
    let list:T[]=[];
    
    if(ourT==undefined){
       return list 
     }
    else {
        list.push(ourT.root)
        
        if(ourT.left!=undefined)
            list = list.concat(GBinTreePreArray(ourT.left))
            
        if(ourT.right!=undefined)
            list = list.concat(GBinTreePreArray(ourT.right))
       
    }
    return list
}


//checking for Q.2.1.4
const assert = require('assert');

function testGBinTreePreArray(){
    //check if Two GBinTreePreArray with the same tree is equal.
    let check : GBinTree<number> = {root: 1};
    let check1 : GBinTree<number> = {root: 1};
    assert.deepEqual(GBinTreePreArray(check) , GBinTreePreArray(check1));

    //check if GBinTreePreArray return array in the right order (Pre).
    let check2 : GBinTree<number> = {
        root: 1,
        left: { root: 4 },
        right: { root: 5 }
    }
    let list = [1, 4, 5 ]
    assert.deepEqual(GBinTreePreArray(check2) ,list ,"GBinTreePreArray(check2)===[1,4,5]" );

    //check if Two tree without the same root is not equal.
    let check3 : GBinTree<number> = {root: 0, left:{root:1},right:{root:2}};
    assert.notDeepEqual(GBinTreePreArray(check) , GBinTreePreArray(check3) ,"[1]!=[0,1,2]");
   
    //check if GBinTreePreArray return array in the right order (Pre).
    let check4 : GBinTree<number> = {
        root: 1 , 
        left: { root: 2 ,left: { root: 3 } , right: { root: 4} },
        right:{root:5 , left:{root: 6 } , right: {root: 7} }
    }
    let list1 = [1,2,3,4,5,6,7]
    assert.deepEqual(GBinTreePreArray(check4) ,list1 ,"GBinTreePreArray(check4)===[1,2,3,4,5,6,7]" );

    return true;
}
console.log("Test GBinTreePreArray:");
console.log(testGBinTreePreArray());

/*
    let check4 : GBinTree<number> = {
    root: 1,
    left: { root: 4 },
    right: { root: 5 }
    }
    console.log((GBinTreePreArray(check4)));
*/

    
    
//Q.2.1.5
const GBinTreeInArray : <T>(ourT:GBinTree<T>) => Array<T> = <T>(ourT:GBinTree<T>) => {
    let list:T[] = [];
    
    if(ourT==undefined){
        return list 
    }
    else {
        if(ourT.left!=undefined)
            list = list.concat(GBinTreeInArray(ourT.left))
            
        list.push(ourT.root)
        
        if(ourT.right!=undefined)
            list = list.concat(GBinTreeInArray(ourT.right))
       
    }
    return list
}


//checking for Q.2.1.5
function testGBinTreeInArray(){
    //check if Two GBinTreeInArray with the same tree is equal.
    let check : GBinTree<number> = {root: 1};
    let check1 : GBinTree<number> = {root: 1};
    assert.deepEqual(GBinTreeInArray(check) , GBinTreeInArray(check1));

    //check if GBinTreeInArray return array in the right order (Pre).
    let check2 : GBinTree<number> = {
        root: 1,
        left: { root: 4 },
        right: { root: 5 }
    }
    let list = [4, 1 , 5 ];
    assert.deepEqual(GBinTreeInArray(check2) ,list ,"GBinTreeInArray(check2)===[4,1,5]" );

    //check if Two tree without the same root is not equal.
    let check3 : GBinTree<number> = {root: 0, left:{root:1},right:{root:2}};
    assert.notDeepEqual(GBinTreeInArray(check) , GBinTreeInArray(check3) ,"[1]!=[1,0,2]");
   
    //check if GBinTreeInArray return array in the right order (In).
    let check4 : GBinTree<number> = {
        root: 1 , 
        left: { root: 2 ,left: { root: 3 } , right: { root: 4} },
        right:{root:5 , left:{root: 6 } , right: {root: 7} }
    }
    let list1 = [3,2,4,1,6,5,7]
    assert.deepEqual(GBinTreeInArray(check4) ,list1 ,"GBinTreeInArray(check4)===[3,2,4,1,6,5,7]" );

    //check if GBinTreeInArray != GBinTreePreArray for the same "tree".
    assert.notDeepEqual(GBinTreeInArray(check4),GBinTreePreArray(check4),"[3,4,2,6,7,5,1] != [1,2,3,4,5,6,7]")

    return true;
}
console.log("Test GBinTreeInArray:");
console.log(testGBinTreeInArray());

/*
    let check5 : GBinTree<number> = {
    root: 1,
    left: { root: 4 },
    right: { root: 5 }
    }
    console.log((GBinTreeInArray(check5)));
*/

    
    
    
//Q.2.1.6
const GBinTreePostArray : <T>(ourT:GBinTree<T>) => Array<T> = <T>(ourT:GBinTree<T>) => {
    let list:T[] = [];
    
    if(ourT==undefined){
        return list 
    }
    else {
        if(ourT.left!=undefined)
            list = list.concat(GBinTreePostArray(ourT.left))
           
        if(ourT.right!=undefined)
            list = list.concat(GBinTreePostArray(ourT.right))
        
        list.push(ourT.root)
    }
    
    return list
}


//checking for Q.2.1.6
function testGBinTreePostArray(){
    //check if Two GBinTreePostArray with the same tree is equal.
    let check : GBinTree<number> = {root: 1};
    let check1 : GBinTree<number> = {root: 1};
    assert.deepEqual(GBinTreePostArray(check) , GBinTreePostArray(check1));

    //check if GBinTreePostArray return array in the right order (Pre).
    let check2 : GBinTree<number> = {
        root: 1,
        left: { root: 4 },
        right: { root: 5 }
    }
    let list = [4, 5 , 1 ];
    assert.deepEqual(GBinTreePostArray(check2) ,list ,"GBinTreePostArray(check2)===[4,5,1]" );

    //check if Two tree without the same root is not equal.
    let check3 : GBinTree<number> = {root: 0, left:{root:1},right:{root:2}};
    assert.notDeepEqual(GBinTreePostArray(check) , GBinTreePostArray(check3) ,"[1]!=[1,2,0]");
   
    //check if GBinTreePostArray return array in the right order (Post).
    let check4 : GBinTree<number> = {
        root: 1 , 
        left: { root: 2 ,left: { root: 3 } , right: { root: 4} },
        right:{root:5 , left:{root: 6 } , right: {root: 7} }
    }
    let list1 = [3,4,2,6,7,5,1]
    assert.deepEqual(GBinTreePostArray(check4) ,list1 ,"GBinTreePostArray(check4)===[3,4,2,6,7,5,1]" );

    //check if GBinTreePostArray != GBinTreePreArray for the same "tree".
    assert.notDeepEqual(GBinTreePostArray(check4),GBinTreePreArray(check4),"[3,4,2,6,7,5,1] != [1,2,3,4,5,6,7]")

    //check if GBinTreePostArray != GBinTreeInArray for the same "tree".
    assert.notDeepEqual(GBinTreePostArray(check4),GBinTreeInArray(check4),"[3,4,2,6,7,5,1] != [3,2,4,1,6,5,7]")

    return true;
}
console.log("Test GBinTreePostArray:");
console.log(testGBinTreePostArray());
/*
    let check6 : GBinTree<number> = {
    root: 1,
    left: { root: 4 },
    right: { root: 5 }
    }
    console.log((GBinTreePostArray(check6)));
*/

};//close block for  GBinTree interface!!!




{
//Q.2.2: Subsets

//Q.2.2.1:KSubsets
const KSubsets : <T> (arrayInput:T[],inputNum:number) => T[][]=(arrayInput,inputNum) => { 
    return findNewSub(arrayInput,inputNum,0,[],[]); 
}

const findNewSub : <T> (arrayInput:T[],inputNum:number,currIndex:number,ourTemp:T[],res:T[][]) => T[][] = (arrayInput,inputNum,currIndex,ourTemp,res) => {
    if(ourTemp.length==inputNum){
        res=res.concat([ourTemp]);
        return res;
    }
    if(currIndex == arrayInput.length){
        return res;
    }
    else{
        ourTemp = ourTemp.concat(arrayInput[currIndex]);
        res = findNewSub(arrayInput,inputNum,currIndex+1,ourTemp,res);
        ourTemp = ourTemp.slice(0,ourTemp.length-1);
        res = findNewSub(arrayInput,inputNum,currIndex+1,ourTemp,res);
        return res;
    }
}


//checking for Q.2.2.1
function testKSubsets(){
    //check if KSubsets return the right answer.
     let arrayInput = [1,2,3];
     //let ksub = KSubsets(arrayInput,2)
     let ksubCheck = [[1,2], [1,3], [2,3]];
    assert.deepEqual(KSubsets(arrayInput,2) ,ksubCheck );

    //check if KSubsets return [].
    let ksubCheck1 = []
    assert.deepEqual(KSubsets(arrayInput ,4),ksubCheck1);

    //check if KSubsets return individuals.
    let ksubCheck2 = [ [1,2,3] ];
    assert.deepEqual(KSubsets(arrayInput,3),ksubCheck2);

    //check if two diffrent ksubset are really not equals.
    let arrayInput1 = [1,2,3,4,5];
    assert.notDeepEqual(KSubsets(arrayInput,2),KSubsets(arrayInput1,2),"[ [1,2], [1,3], [2,3] ] != [ [1,2],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5],[3,4],[3,5],[4,5] ]");

    return true;
}
console.log("Test testKSubsets:");
console.log(testKSubsets());

     //let arrayInput = [1,2,3]
     //let ksub = KSubsets(arrayInput,2)
    //console.log(ksub);



    
//Q.2.2.2: AllSubsets
const AllSubsets = <T>(arrayInput:T[]) : T[][] =>{ 
    let ourRes : T[][] = [];
    let i:number;
    
    for(i=0 ; i<=arrayInput.length ; i++)
        ourRes=ourRes.concat(KSubsets(arrayInput,i));
    
    return ourRes;
} 
 
 
//checking for Q.2.2.2
function testAllSubsets(){
    //check if AllSubsets return the right answer.
     let arrayInput = [1,2,3];
     let allSubCheck = [ [],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3] ];
    assert.deepEqual(AllSubsets(arrayInput) ,allSubCheck );

    //check if AllSubsets return [[]].
    let allSubCheck1 = [];
    let allSubCheck2 = [ [] ];
    assert.deepEqual(AllSubsets(allSubCheck1),allSubCheck2);

    //check AllSubsets for array of individual.
    let allSubCheck3 = [1];
    let allSubCheck4 = [[],[1]];
    assert.deepEqual(AllSubsets(allSubCheck3),allSubCheck4);

    //check if two diffrent AllSubsets are really not equals.
    let arrayInput1 = [1,2,3,4,5];
    assert.notDeepEqual(AllSubsets(arrayInput),KSubsets(arrayInput1,2),"[  [],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3] ] != [ [1,2],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5],[3,4],[3,5],[4,5] ]");

    return true;
}
console.log("Test testAllSubsets:");
console.log(testAllSubsets());

//let arrayInput1 = [1,2,3]
//let allsubs = AllSubsets(arrayInput1)
//console.log(allsubs);


}; //close block for subset


//Q.2.3 : Flatmap

//Q.2.3.1 : Flatmap Definition
const Flatmap:<T,R> (f:(x:T)=>R[],A:T[])=>R[]=(f,A)=> {
    return map(f,A).reduce((acc,curr)=>acc.concat(curr),[])
};

//checking for Q.2.3.1
function testFlatmap(){
    //check if Flatmap return the right answer for x[0].
    let checkFlatmap = [ 1,2,5,6 ];
    assert.deepEqual(Flatmap((x)=>x[0], [[[1,2], [3,4]], [[5,6], [7,8]]]) ,checkFlatmap );

    //check if Flatmap return the right answer for x[1].
    let checkFlatmap1 = [ 3,4,7,8 ];
    assert.deepEqual(Flatmap((x)=>x[1], [[[1,2], [3,4]], [[5,6], [7,8]]]),checkFlatmap1);

    //check if flatmap is not equal.
    assert.notDeepEqual(Flatmap((x)=>x[0], [[[1,2], [3,4]], [[5,6], [7,8]]]) ,Flatmap((x)=>x[1], [[[1,2], [3,4]], [[5,6], [7,8]]]) , "[ 1,2,5,6 ] != [ 3,4,7,8 ]");

    return true;
}
console.log("Test testFlatmap:");
console.log(testFlatmap());

//console.log(Flatmap((x)=>x[0], [[[1,2], [3,4]], [[5,6], [7,8]]]));
//console.log(Flatmap((x)=>x[1], [[[1,2], [3,4]], [[5,6], [7,8]]]));


//Q.2.3.2 Using Flatmap
interface boxarts{
    width:number;
    height:number;
    url:string;
};

interface videos{
    id : number;
    title: string;
    boxarts: boxarts[];
    url: string;
    rating: number;
    bookmark: {id:number, time:number}[];
};

interface movieLists{
    name: string;
    videos: videos[];
};

interface boxartRet{
    id: number,
    title: string,
    boxart: string,
};
type getBoxType = (l: movieLists[])=>boxartRet[];

const getBoxArts:getBoxType=(l)=>{
    if(l==[])
          return []
    return Flatmap <movieLists,videos> ((x)=>x.videos,l).map((x)=> 
    <boxartRet>{id: x.id,title: x.title, boxart: x.boxarts.filter((y:boxarts)=>y.height===200&&y.width===150).reduce((acc,curr)=>curr.url,{})})
};



//check Q.2.3.2

function testgetBoxArts(){
    //check if getBoxArts the example in the site.
    let list1: movieLists[] = [
        {
            name: "Instant Queue",
            videos : [
                {
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        },
        {
            name: "New Releases",
            videos: [
                {
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        }
    ]

    let checkExample =[{ id: 70111470,
                        title: 'Die Hard',
                         boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg' },
                         { id: 654356453,
                          title: 'Bad Boys',
                         boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg' },
                          { id: 65432445,
                          title: 'The Chamber',
                          boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg' },
                         { id: 675465,
                          title: 'Fracture',
                        boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg' }];

    assert.deepEqual(getBoxArts(list1),checkExample );


    //check getboxarts test 2.
    var list2 : movieLists[] = [
        {
        name: "shani",
        videos : [
            {
                "id": 246485468468468464 ,
                "title": "",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 254516848464684 ,
                "title": "",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
        
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
        },
        {
        name: "omer",
        videos: [
            {
                "id": 7011123423423470,
                "title": "",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 701132423423443240,
                "title": "",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
        }
        ];

        let checkExample1 = [{ id: 246485468468468480,
                             title: '',
                             boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg' },
                             { id: 254516848464684,
                             title: '',
                            boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg' },
                            { id: 7011123423423470,
                            title: '',
                             boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg' },
                             { id: 701132423423443200,
                             title: '',
                            boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg' }];
        
    assert.deepEqual(getBoxArts(list2),checkExample1,"check for right answer!");
       

    //check getboxarts test number 3.
    var list3: movieLists[] = [
        {
        name: "shani",
        videos: [
            {
                "id": 70111470,
                "title": "shani",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "omer",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
        },
        {
        name: "s2",
        videos: [
            {   
                "id": 65432445,
                "title": "ppl",
                "boxarts": [
                    { width: 250, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "ppl2",
                "boxarts": [
                    { width: 350, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
        }
        ];

        let checkExample2 = [ { id: 70111470, title: 'shani', boxart: {} },
                              { id: 654356453, title: 'omer', boxart: {} },
                              { id: 65432445, title: 'ppl', boxart: {} },
                              { id: 675465, title: 'ppl2', boxart: {} }];

      assert.deepEqual(getBoxArts(list3),checkExample2,"check for right answer!");   

      //check for not equals
      assert.notDeepEqual(getBoxArts(list1),getBoxArts(list2));
      assert.notDeepEqual(getBoxArts(list1),getBoxArts(list3));
      assert.notDeepEqual(getBoxArts(list2),getBoxArts(list3));


    return true;
}
console.log("Test testgetBoxArts:");
console.log(testgetBoxArts());




//console.log(getBoxArts(list1));
//console.log(getBoxArts(list2));
//console.log(getBoxArts(list3));