var permute = function(nums) {
    var results = [];

    var recurse = function (perm, left) {
      if(left.length ===  0) {
        results.push(perm);
        console.log(results);
      }
      for (var i = 0; i < left.length; i++) {
        var leftSide = left.slice(0, i);
        var rightSide = left.slice(i + 1);
        var remaining = leftSide.concat(rightSide);
        
        var next = perm;
        next.push(left[i]);
        // console.log(next, remaining);
        recurse(perm, remaining);

      }
    };

    recurse([], nums);
    return results;
};

var altPermute = function(arr) {
  var results = [];

  var recurse = function (arr, memo) {
    var curr;
    memo = memo || [];
    for (var i = 0; i < arr.length; i++){
      curr = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(curr));
      }
      recurse(arr.slice(), memo.concat(curr));
      arr.splice(i, 0, curr[0]);
    }
  }
  recurse(arr);
  return results;
};

var arr = [1,2,3];
console.log(permute(arr));
// console.log(altPermute(arr));

/*

// method 1: standard backtracing solution
vector<vector<int> > permute(vector<int> &num) {
    vector<vector<int> > ans;
    permutation(num, 0, ans);
    return ans;
}

void permutation(vector<int> &num, int begin, vector<vector<int> > &ans) {
    if (begin >= num.size()) {
        ans.push_back(num);
        return;
    }

    // every number chosen to be the begin once
    for (int i = begin; i < num.size(); ++i) {
        swap(num[begin], num[i]);
        permutation(num, begin+1, ans);
        swap(num[begin], num[i]);
    }
}


// method 2: using next_permutation to iterate all the permutaions
vector<vector<int> > permute(vector<int> &num) {
    vector<vector<int> > ans;
    sort(num.begin(), num.end());
    ans.push_back(num);

    while(next_permutation(num.begin(), num.end()))
        ans.push_back(num);
    return ans;
}

// method 3: recursive dfs
vector<vector<int> > permute(vector<int> &num) {
    vector<vector<int> > ans;
    dfs(num, ans);
    return ans;
}

void dfs(vector<int> &num, vector<vector<int>> &ans) {
    if (num.size() == 1) {
        vector<int> tmp(num.begin(), num.end());
        ans.push_back(tmp);
        return;
    }

    vector<vector<int> > ans1;
    vector<int> num1(num.begin()+1, num.end());
    dfs(num1, ans);

    for(int i = 0; i < ans.size(); ++i) {
        for(int j = 0; j <= ans[i].size(); ++j) {
            vector<int> tmp = ans[i];
            tmp.insert(tmp.begin()+j, num[0]);
            ans1.push_back(tmp);
        }
    }

    ans = ans1;
}

*/