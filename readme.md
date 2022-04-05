# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 05 Apr 2022 03:06:20 GMT with Node.js v16.14.2 (V8 v9.4.146.24-node.20) on fv-az213-733 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (249%)        | `500`ns (249%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `601`ns (299%)        | `700`ns (348%)                 | `1,663,894`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `901`ns (448%)        | `1,001`ns (498%)               | `1,109,878`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,301`ns (647%)      | `1,401`ns (697%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,600`ns (796%)      | `1,700`ns (846%)               | `625,000`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,201`ns (1,095%)    | `2,401`ns (1,195%)             | `454,339`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,603`ns (2,290%)    | `4,803`ns (2,390%)             | `217,250`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,803`ns (3,882%)    | `8,207`ns (4,083%)             | `128,156`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,600`ns (100%)      | `1,701`ns (106%)               | `625,000`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `47,423`ns (2,964%)   | `51,231`ns (3,202%)            | `21,087`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `64,831`ns (4,052%)   | `69,055`ns (4,316%)            | `15,425`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (199%)        | `401`ns (200%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (249%)        | `601`ns (299%)                 | `2,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,100`ns (547%)      | `1,301`ns (647%)               | `909,091`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,201`ns (598%)      | `1,401`ns (697%)               | `832,639`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,001`ns (1,991%)    | `4,403`ns (2,191%)             | `249,938`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,700`ns (846%)      | `1,801`ns (896%)               | `588,235`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,800`ns (896%)      | `2,000`ns (995%)               | `555,556`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,003`ns (2,489%)    | `5,203`ns (2,589%)             | `199,880`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,803`ns (2,887%)    | `6,303`ns (3,136%)             | `172,325`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `401`ns (100%)        | `401`ns (100%)                 | `2,493,766`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `500`ns (125%)        | `500`ns (125%)                 | `2,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `500`ns (125%)        | `501`ns (125%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `300`ns (149%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `401`ns (200%)        | `401`ns (200%)                 | `2,493,766`/sec       |

<!-- endblock(results) -->
