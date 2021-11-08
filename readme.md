# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 08 Nov 2021 10:17:33 GMT with Node.js v16.13.0 (V8 v9.4.146.19-node.13) on fv-az225-975 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `301`ns (298%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (396%)        | `401`ns (397%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (594%)        | `600`ns (594%)                 | `1,666,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,000`ns (990%)      | `1,001`ns (991%)               | `1,000,000`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,101`ns (1,090%)    | `1,201`ns (1,189%)             | `908,265`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (1,188%)    | `1,201`ns (1,189%)             | `833,333`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,701`ns (1,684%)    | `2,000`ns (1,980%)             | `587,889`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,103`ns (4,062%)    | `4,303`ns (4,260%)             | `243,724`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,003`ns (6,934%)    | `7,503`ns (7,429%)             | `142,796`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,200`ns (100%)      | `1,301`ns (108%)               | `833,333`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `40,127`ns (3,344%)   | `43,807`ns (3,651%)            | `24,921`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `58,623`ns (4,885%)   | `66,303`ns (5,525%)            | `17,058`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `400`ns (396%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (496%)        | `600`ns (594%)                 | `1,996,008`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,100`ns (1,089%)    | `1,300`ns (1,287%)             | `909,091`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,101`ns (1,090%)    | `1,200`ns (1,188%)             | `908,265`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,601`ns (3,565%)    | `3,801`ns (3,763%)             | `277,701`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `200`ns (198%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (297%)        | `300`ns (297%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,301`ns (1,288%)    | `1,601`ns (1,585%)             | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,401`ns (1,387%)    | `1,600`ns (1,584%)             | `713,776`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,203`ns (4,161%)    | `4,503`ns (4,458%)             | `237,925`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,803`ns (4,755%)    | `5,103`ns (5,052%)             | `208,203`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `300`ns (100%)        | `301`ns (100%)                 | `3,333,333`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `300`ns (100%)        | `400`ns (133%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `400`ns (133%)        | `401`ns (134%)                 | `2,500,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `300`ns (149%)        | `300`ns (149%)                 | `3,333,333`/sec       |

<!-- endblock(results) -->
