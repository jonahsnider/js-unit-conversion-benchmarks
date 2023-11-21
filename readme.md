# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 21 Nov 2023 14:54:44 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az849-910 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `141`ns (100%)        | `202`ns (143%)                 | `7,092,199`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (213%)        | `410`ns (291%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `342`ns (243%)        | `531`ns (377%)                 | `2,923,977`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (341%)        | `672`ns (477%)                 | `2,079,002`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `652`ns (462%)        | `1,092`ns (774%)               | `1,533,742`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `982`ns (696%)        | `1,523`ns (1,080%)             | `1,018,330`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `993`ns (704%)        | `1,444`ns (1,024%)             | `1,007,049`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,665`ns (1,181%)    | `2,857`ns (2,026%)             | `600,601`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,317`ns (2,352%)    | `5,031`ns (3,568%)             | `301,477`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,351`ns (3,795%)    | `9,639`ns (6,836%)             | `186,881`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `693`ns (100%)        | `771`ns (111%)                 | `1,443,001`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,079`ns (4,629%)   | `39,039`ns (5,633%)            | `31,173`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,671`ns (5,869%)   | `41,279`ns (5,957%)            | `24,588`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (175%)        | `401`ns (200%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (224%)        | `502`ns (250%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `592`ns (295%)        | `652`ns (324%)                 | `1,689,189`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,242`ns (618%)      | `1,343`ns (668%)               | `805,153`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,332`ns (663%)      | `1,454`ns (723%)               | `750,751`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,699`ns (2,338%)    | `4,983`ns (2,479%)             | `212,811`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `221`ns (116%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (179%)        | `412`ns (216%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `411`ns (215%)        | `511`ns (268%)                 | `2,433,090`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,232`ns (645%)      | `1,363`ns (714%)               | `811,688`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,564`ns (819%)      | `1,844`ns (965%)               | `639,386`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,643`ns (2,954%)    | `5,963`ns (3,122%)             | `177,211`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,875`ns (3,076%)    | `6,795`ns (3,558%)             | `170,213`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `561`ns (100%)        | `621`ns (111%)                 | `1,782,531`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `601`ns (107%)        | `651`ns (116%)                 | `1,663,894`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `672`ns (120%)        | `742`ns (132%)                 | `1,488,095`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `301`ns (100%)        | `330`ns (110%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `542`ns (180%)        | `592`ns (197%)                 | `1,845,018`/sec       |

<!-- endblock(results) -->
