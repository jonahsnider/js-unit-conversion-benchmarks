# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 25 Feb 2022 02:32:07 GMT with Node.js v16.14.0 (V8 v9.4.146.24-node.20) on fv-az219-118 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (200%)        | `400`ns (200%)                 | `2,500,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (200%)        | `401`ns (201%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (251%)        | `600`ns (300%)                 | `1,996,008`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `801`ns (401%)        | `901`ns (451%)                 | `1,248,439`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,200`ns (600%)      | `1,301`ns (651%)               | `833,333`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,200`ns (600%)      | `1,300`ns (650%)               | `833,333`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,901`ns (951%)      | `2,201`ns (1,101%)             | `526,039`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,203`ns (2,102%)    | `4,403`ns (2,202%)             | `237,925`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,403`ns (3,702%)    | `7,903`ns (3,952%)             | `135,080`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `1,200`ns (100%)      | `1,301`ns (108%)               | `833,333`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `39,903`ns (3,325%)   | `45,823`ns (3,819%)            | `25,061`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `60,703`ns (5,059%)   | `72,447`ns (6,037%)            | `16,474`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (150%)        | `301`ns (151%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (200%)        | `400`ns (200%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `401`ns (201%)        | `501`ns (251%)                 | `2,493,766`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,000`ns (500%)      | `1,200`ns (600%)               | `1,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (550%)      | `1,200`ns (600%)               | `909,091`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,501`ns (1,751%)    | `3,701`ns (1,851%)             | `285,633`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (150%)        | `301`ns (151%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (151%)        | `301`ns (151%)                 | `3,322,259`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,301`ns (651%)      | `1,700`ns (850%)               | `768,640`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,401`ns (701%)      | `1,600`ns (800%)               | `713,776`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,303`ns (2,152%)    | `4,603`ns (2,302%)             | `232,396`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,003`ns (2,502%)    | `5,303`ns (2,652%)             | `199,880`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `301`ns (100%)        | `400`ns (133%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `400`ns (133%)        | `401`ns (133%)                 | `2,500,000`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `500`ns (166%)        | `500`ns (166%)                 | `2,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `201`ns (100%)        | `201`ns (100%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `301`ns (150%)        | `400`ns (199%)                 | `3,322,259`/sec       |

<!-- endblock(results) -->
