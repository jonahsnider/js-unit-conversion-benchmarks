# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 29 Nov 2023 21:03:48 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1055-960 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `171`ns (100%)        | `200`ns (117%)                 | `5,847,953`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (194%)        | `382`ns (223%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (281%)        | `542`ns (317%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `592`ns (346%)        | `671`ns (392%)                 | `1,689,189`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `983`ns (575%)        | `1,114`ns (651%)               | `1,017,294`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,302`ns (761%)      | `1,493`ns (873%)               | `768,049`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,322`ns (773%)      | `1,513`ns (885%)               | `756,430`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,575`ns (1,506%)    | `2,885`ns (1,687%)             | `388,350`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,539`ns (2,654%)    | `5,051`ns (2,954%)             | `220,313`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,327`ns (5,454%)    | `9,615`ns (5,623%)             | `107,216`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `781`ns (100%)        | `873`ns (112%)                 | `1,280,410`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,631`ns (4,050%)   | `38,527`ns (4,933%)            | `31,615`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,487`ns (5,056%)   | `40,127`ns (5,138%)            | `25,325`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (170%)        | `391`ns (195%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (219%)        | `492`ns (245%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `591`ns (294%)        | `651`ns (324%)                 | `1,692,047`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,263`ns (628%)      | `1,364`ns (679%)               | `791,766`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,383`ns (688%)      | `1,534`ns (763%)               | `723,066`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,731`ns (2,354%)    | `5,091`ns (2,533%)             | `211,372`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `370`ns (184%)        | `411`ns (204%)                 | `2,702,703`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `502`ns (250%)        | `552`ns (275%)                 | `1,992,032`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,303`ns (648%)      | `1,412`ns (702%)               | `767,460`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,744`ns (868%)      | `1,934`ns (962%)               | `573,394`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,915`ns (2,943%)    | `6,091`ns (3,030%)             | `169,062`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,563`ns (3,265%)    | `6,927`ns (3,446%)             | `152,369`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `561`ns (100%)        | `632`ns (113%)                 | `1,782,531`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (109%)        | `672`ns (120%)                 | `1,636,661`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `692`ns (123%)        | `781`ns (139%)                 | `1,445,087`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `282`ns (100%)        | `310`ns (110%)                 | `3,546,099`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `502`ns (178%)        | `561`ns (199%)                 | `1,992,032`/sec       |

<!-- endblock(results) -->
