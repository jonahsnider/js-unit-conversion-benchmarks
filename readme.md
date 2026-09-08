# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 08 Sep 2026 21:43:42 GMT with Node.js v26.8.1 (V8 v14.6.202.34-node.28) on runnervmlun5p (Linux-x64 INTEL(R) XEON(R) PLATINUM 8573C)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `45`ns (100%)         | `47`ns (104%)                  | `22,222,222`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `94`ns (209%)         | `97`ns (216%)                  | `10,638,298`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (244%)        | `118`ns (262%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `148`ns (329%)        | `152`ns (338%)                 | `6,756,757`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `183`ns (407%)        | `196`ns (436%)                 | `5,464,481`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `304`ns (676%)        | `309`ns (687%)                 | `3,289,474`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `395`ns (878%)        | `424`ns (942%)                 | `2,531,646`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `430`ns (956%)        | `436`ns (969%)                 | `2,325,581`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `925`ns (2,056%)      | `948`ns (2,107%)               | `1,081,081`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,490`ns (3,311%)    | `1,522`ns (3,382%)             | `671,141`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `327`ns (100%)        | `339`ns (104%)                 | `3,058,104`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `985`ns (301%)        | `1,087`ns (332%)               | `1,015,228`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `18,863`ns (5,769%)   | `19,071`ns (5,832%)            | `53,014`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `47`ns (100%)         | `48`ns (102%)                  | `21,276,596`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `105`ns (223%)        | `108`ns (230%)                 | `9,523,810`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `108`ns (230%)        | `113`ns (240%)                 | `9,259,259`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `122`ns (260%)        | `126`ns (268%)                 | `8,196,721`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `167`ns (355%)        | `180`ns (383%)                 | `5,988,024`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `446`ns (949%)        | `453`ns (964%)                 | `2,242,152`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,597`ns (3,398%)    | `1,632`ns (3,472%)             | `626,174`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `47`ns (100%)         | `48`ns (102%)                  | `21,276,596`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (213%)        | `104`ns (221%)                 | `10,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `109`ns (232%)        | `114`ns (243%)                 | `9,174,312`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `113`ns (240%)        | `116`ns (247%)                 | `8,849,558`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `440`ns (936%)        | `465`ns (989%)                 | `2,272,727`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,155`ns (2,457%)    | `1,170`ns (2,489%)             | `865,801`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,251`ns (4,789%)    | `2,287`ns (4,866%)             | `444,247`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `158`ns (100%)        | `163`ns (103%)                 | `6,329,114`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `202`ns (128%)        | `205`ns (130%)                 | `4,950,495`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `268`ns (170%)        | `275`ns (174%)                 | `3,731,343`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `49`ns (100%)         | `50`ns (102%)                  | `20,408,163`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `98`ns (200%)         | `102`ns (208%)                 | `10,204,082`/sec      |

<!-- endblock(results) -->
