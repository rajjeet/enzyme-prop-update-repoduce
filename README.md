# Enzyme Prop Update Issue 
### Setup
```javascript
npm install
```

### Run
```javascript
npm start
```

### Test
```javascript
npm test
```

### Notes
* Compare the output of the test and the browser
* Global copy updates differently in memory dom during test vs browser

This is the code snippet (App.js lines 16-19) that's causing the issue.
```javascript
    addToGlobalCounter = () => {
        this.props.addToGlobalCounter();
        this.setState({globalCounterCopy: this.props.globalCounter})
    };
```
The component state is being updated from the Redux store right after the store updates. 
The problem is that the behaviour of the app differs in the browser vs
 the tests, which are 
making some of my test unreliable. I'm not sure the root cause of this issue,
but I created this reproduction as a conversation starters and get other's input
on this matter. 

Here's the jest output:
```javascript
FAIL src/__tests__/App.spec.js
  App
    × renders (124ms)

  ● App › renders

    expect(received).toEqual(expected)

    Difference:

    - Expected
    + Received

    - Global Copy: 0
    + Global Copy: 2

      19 |         expect(wrapper.find('#local-text').text()).toEqual("Local: 1");
      20 |         expect(wrapper.find('#global-text').text()).toEqual("Global: 2");
    > 21 |         expect(wrapper.find('#global-copy-text').text()).toEqual("Global Copy: 0");
         |                                                          ^
      22 |
      23 |     });
      24 | });

      at Object.toEqual (src/__tests__/App.spec.js:21:58)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        6.721s
Ran all test suites.

```
<b>The browser is showing "Global Copy: 0" and not "Global Copy: 2"</b>


If you can point out my mistake, that would be great! Thanks!
