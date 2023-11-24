# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 24 Nov 2023 01:59:34 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1200-540 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `202`ns (168%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `210`ns (175%)        | `372`ns (310%)                 | `4,761,905`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `281`ns (234%)        | `511`ns (426%)                 | `3,558,719`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `331`ns (276%)        | `683`ns (569%)                 | `3,021,148`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `531`ns (443%)        | `1,122`ns (935%)               | `1,883,239`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `691`ns (576%)        | `1,473`ns (1,228%)             | `1,447,178`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `702`ns (585%)        | `1,394`ns (1,162%)             | `1,424,501`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,304`ns (1,087%)    | `2,777`ns (2,314%)             | `766,871`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,595`ns (2,163%)    | `4,791`ns (3,992%)             | `385,356`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,671`ns (3,892%)    | `9,679`ns (8,066%)             | `214,087`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `791`ns (100%)        | `891`ns (113%)                 | `1,264,223`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,631`ns (3,999%)   | `38,559`ns (4,875%)            | `31,615`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,935`ns (5,049%)   | `40,607`ns (5,134%)            | `25,041`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `330`ns (164%)        | `381`ns (190%)                 | `3,030,303`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (199%)        | `451`ns (224%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (279%)        | `613`ns (305%)                 | `1,782,531`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,213`ns (603%)      | `1,323`ns (658%)               | `824,402`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,303`ns (648%)      | `1,474`ns (733%)               | `767,460`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,511`ns (2,244%)    | `4,911`ns (2,443%)             | `221,680`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `212`ns (111%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `411`ns (215%)        | `451`ns (236%)                 | `2,433,090`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (247%)        | `522`ns (273%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,312`ns (687%)      | `1,404`ns (735%)               | `762,195`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,783`ns (934%)      | `1,945`ns (1,018%)             | `560,852`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,943`ns (3,112%)    | `6,095`ns (3,191%)             | `168,265`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,655`ns (3,484%)    | `6,955`ns (3,641%)             | `150,263`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `562`ns (100%)        | `641`ns (114%)                 | `1,779,359`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (107%)        | `671`ns (119%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `682`ns (121%)        | `763`ns (136%)                 | `1,466,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `282`ns (100%)        | `311`ns (110%)                 | `3,546,099`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `502`ns (178%)        | `561`ns (199%)                 | `1,992,032`/sec       |

<!-- endblock(results) -->
