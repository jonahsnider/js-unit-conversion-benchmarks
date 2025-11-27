# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 27 Nov 2025 18:14:25 GMT with Node.js v24.11.1 (V8 v13.6.233.10-node.28) on runnervmg1sw1 (Linux-x64 Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `67`ns (100%)         | `69`ns (103%)                  | `14,925,373`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `116`ns (173%)        | `118`ns (176%)                 | `8,620,690`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `117`ns (175%)        | `119`ns (178%)                 | `8,547,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `162`ns (242%)        | `165`ns (246%)                 | `6,172,840`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `205`ns (306%)        | `212`ns (316%)                 | `4,878,049`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `349`ns (521%)        | `354`ns (528%)                 | `2,865,330`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `492`ns (734%)        | `516`ns (770%)                 | `2,032,520`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `677`ns (1,010%)      | `691`ns (1,031%)               | `1,477,105`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,079`ns (1,610%)    | `1,144`ns (1,707%)             | `926,784`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,892`ns (2,824%)    | `1,921`ns (2,867%)             | `528,541`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `424`ns (100%)        | `442`ns (104%)                 | `2,358,491`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,346`ns (317%)      | `1,417`ns (334%)               | `742,942`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `23,903`ns (5,638%)   | `24,463`ns (5,770%)            | `41,836`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `61`ns (100%)         | `62`ns (102%)                  | `16,393,443`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (231%)        | `162`ns (266%)                 | `7,092,199`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `144`ns (236%)        | `148`ns (243%)                 | `6,944,444`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `149`ns (244%)        | `154`ns (252%)                 | `6,711,409`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `209`ns (343%)        | `221`ns (362%)                 | `4,784,689`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `634`ns (1,039%)      | `645`ns (1,057%)               | `1,577,287`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,913`ns (3,136%)    | `1,953`ns (3,202%)             | `522,739`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `66`ns (100%)         | `67`ns (102%)                  | `15,151,515`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `104`ns (158%)        | `107`ns (162%)                 | `9,615,385`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `135`ns (205%)        | `139`ns (211%)                 | `7,407,407`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `165`ns (250%)        | `169`ns (256%)                 | `6,060,606`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `532`ns (806%)        | `600`ns (909%)                 | `1,879,699`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,543`ns (2,338%)    | `1,568`ns (2,376%)             | `648,088`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,513`ns (3,808%)    | `2,575`ns (3,902%)             | `397,931`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `191`ns (100%)        | `193`ns (101%)                 | `5,235,602`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (126%)        | `242`ns (127%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `310`ns (162%)        | `314`ns (164%)                 | `3,225,806`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `58`ns (100%)         | `59`ns (102%)                  | `17,241,379`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `111`ns (191%)        | `115`ns (198%)                 | `9,009,009`/sec       |

<!-- endblock(results) -->
